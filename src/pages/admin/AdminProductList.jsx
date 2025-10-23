import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit, Trash2, PlusCircle } from 'lucide-react';

const AdminProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/api/admin/products');
      setProducts(data);
      setError(null);
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to fetch products';
      setError(message);
      toast({ variant: 'destructive', title: 'Error', description: message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const createProductHandler = async () => {
    if (window.confirm('Are you sure you want to create a new sample product?')) {
      try {
        const { data: createdProduct } = await axios.post('/api/admin/products');
        toast({ title: 'Success', description: 'Sample product created. Please edit details.' });
        // --- 1. CORRECTED PATH: Added '/dashboard/' ---
        navigate(`/admin/dashboard/products/${createdProduct._id}/edit`);
      } catch (err) {
        const message = err.response?.data?.message || 'Could not create product';
        toast({ variant: 'destructive', title: 'Error', description: message });
      }
    }
  };
  
  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`/api/admin/products/${id}`);
        toast({ title: 'Success', description: 'Product deleted successfully' });
        fetchProducts(); // Refresh list
      } catch (err) {
        const message = err.response?.data?.message || 'Could not delete product';
        toast({ variant: 'destructive', title: 'Error', description: message });
      }
    }
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <Button onClick={createProductHandler}>
          <PlusCircle className="w-4 h-4 mr-2" />
          Create Product
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id}>
              <TableCell className="font-medium truncate max-w-[100px]">{product._id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.category?.name || 'N/A'}</TableCell>
              <TableCell className="space-x-2">
                {/* --- 2. CORRECTED PATH: Added '/dashboard/' --- */}
                <Button variant="outline" size="sm" onClick={() => navigate(`/admin/dashboard/products/${product._id}/edit`)}>
                  <Edit className="w-4 h-4" />
                </Button>
                <Button variant="destructive" size="sm" onClick={() => deleteHandler(product._id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminProductList;

