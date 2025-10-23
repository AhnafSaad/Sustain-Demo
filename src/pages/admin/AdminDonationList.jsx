import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from 'lucide-react';

const AdminDonationList = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDonations = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/api/admin/donations');
      setDonations(data);
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to fetch donations.';
      setError(message);
      toast({ variant: 'destructive', title: 'Error', description: message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const handleStatusUpdate = async (id, status) => {
    try {
      await axios.put(`/api/admin/donations/${id}`, { status });
      toast({ title: 'Success', description: `Donation status updated to ${status}` });
      fetchDonations(); // Refresh the list
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to update status.';
      toast({ variant: 'destructive', title: 'Error', description: message });
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return <Badge variant="success">Approved</Badge>;
      case 'Disapproved':
        return <Badge variant="destructive">Disapproved</Badge>;
      case 'Pending':
      default:
        return <Badge variant="secondary">Pending</Badge>;
    }
  };


  if (loading) return <div>Loading donations...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Donations</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Item Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Submitted On</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {donations.map((donation) => (
            <TableRow key={donation._id}>
              <TableCell>
                <div>{donation.user.name}</div>
                <div className="text-xs text-muted-foreground">{donation.user.email}</div>
              </TableCell>
              <TableCell>{donation.itemName}</TableCell>
              <TableCell className="max-w-xs truncate">{donation.itemDescription}</TableCell>
              <TableCell>{getStatusBadge(donation.status)}</TableCell>
              <TableCell>{new Date(donation.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleStatusUpdate(donation._id, 'Approved')}>
                        Approve
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleStatusUpdate(donation._id, 'Disapproved')}>
                        Disapprove
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
       {donations.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          No donation requests found.
        </div>
      )}
    </div>
  );
};

export default AdminDonationList;
