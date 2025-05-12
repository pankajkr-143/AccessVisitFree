import React from 'react';
import Layout from '../components/layout/Layout';
import { Clock, MapPin, Bus } from 'lucide-react';

interface TransportationScheduleProps {
  transportName: string;
  type: string;
}

const TransportationSchedule: React.FC<TransportationScheduleProps> = ({ transportName, type }) => {
  // Mock schedule data
  const schedules = [
    {
      id: 1,
      departure: "Central Station",
      arrival: "Airport Terminal 1",
      departureTime: "06:00",
      arrivalTime: "06:45",
      status: "On Time",
      platform: "A1"
    },
    {
      id: 2,
      departure: "Central Station",
      arrival: "Airport Terminal 2",
      departureTime: "06:30",
      arrivalTime: "07:15",
      status: "Delayed",
      platform: "A2"
    },
    {
      id: 3,
      departure: "Central Station",
      arrival: "Airport Terminal 1",
      departureTime: "07:00",
      arrivalTime: "07:45",
      status: "On Time",
      platform: "A1"
    },
    {
      id: 4,
      departure: "Central Station",
      arrival: "Airport Terminal 2",
      departureTime: "07:30",
      arrivalTime: "08:15",
      status: "On Time",
      platform: "A2"
    }
  ];

  return (
    <Layout>
      <div className="bg-primary-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{transportName} Schedule</h1>
            <div className="flex items-center text-gray-600">
              <Bus size={20} className="mr-2" />
              <span>Type: {type}</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {schedules.map((schedule) => (
                    <tr key={schedule.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Clock size={16} className="mr-2 text-gray-400" />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{schedule.departureTime}</div>
                            <div className="text-sm text-gray-500">{schedule.arrivalTime}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2 text-gray-400" />
                          <span className="text-sm text-gray-900">{schedule.departure}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2 text-gray-400" />
                          <span className="text-sm text-gray-900">{schedule.arrival}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{schedule.platform}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          schedule.status === 'On Time' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {schedule.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TransportationSchedule;