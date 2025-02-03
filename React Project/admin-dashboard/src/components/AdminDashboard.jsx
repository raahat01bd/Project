import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";
import { Airplane, Users, DollarSign, Settings } from "lucide-react";

export default function AdminDashboard() {
  const [flights, setFlights] = useState([
    { id: 1, airline: "Delta", destination: "New York", status: "On Time" },
    { id: 2, airline: "Emirates", destination: "Dubai", status: "Delayed" },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);

  return (
    <div className="p-6 space-y-6">
      {/* Dashboard Stats */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <h2 className="text-xl font-semibold">Total Tickets</h2>
              <p className="text-2xl font-bold">1,245</p>
            </div>
            <Airplane size={32} />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <h2 className="text-xl font-semibold">Total Revenue</h2>
              <p className="text-2xl font-bold">$254,500</p>
            </div>
            <DollarSign size={32} />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <h2 className="text-xl font-semibold">Total Users</h2>
              <p className="text-2xl font-bold">3,567</p>
            </div>
            <Users size={32} />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <h2 className="text-xl font-semibold">Settings</h2>
              <p className="text-2xl font-bold">Manage</p>
            </div>
            <Settings size={32} />
          </CardContent>
        </Card>
      </div>

      {/* Flights Table */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Flights</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Airline</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flights.map((flight) => (
              <TableRow key={flight.id}>
                <TableCell>{flight.id}</TableCell>
                <TableCell>{flight.airline}</TableCell>
                <TableCell>{flight.destination}</TableCell>
                <TableCell>{flight.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Users Table */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Registered Users</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
