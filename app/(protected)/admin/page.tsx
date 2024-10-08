'use client';
import { admin } from '@/lib/actions/auth/admin';
import { RoleGate } from '@/components/auth/role-gate';
import { FormSuccess } from '@/components/form-sucess';
import { Button } from '@/components/ui/button';
import { UserRole } from '@prisma/client';
import React from 'react';
import { toast } from 'sonner';
const AdminPage = () => {
    // for server side
    const onServerActionClick = () => {
        admin().then((data) => {
            if (data.error) {
                toast.error(data.error);
            }

            if (data.success) {
                toast.success(data.success);
            }
        });
    };

    // for client side
    const onApiRouteClick = () => {
        fetch('/api/admin').then((response) => {
            if (response.ok) {
                toast.success('Allowed API Route!');
            } else {
                toast.error('Forbidden API Route!');
            }
        });
    };

    return (
        <div className="space-y-4">
            {/* only admin would be able to see this */}
            <RoleGate allowedRole={UserRole.ADMIN}>
                <FormSuccess message="You are allowed to see this content!" />
            </RoleGate>
            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                <p className="text-sm font-medium">Admin-only API Route</p>
                <Button onClick={onApiRouteClick}>Click to test</Button>
            </div>

            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                <p className="text-sm font-medium">Admin-only Server Action</p>
                <Button onClick={onServerActionClick}>Click to test</Button>
            </div>
        </div>
    );
};

export default AdminPage;
