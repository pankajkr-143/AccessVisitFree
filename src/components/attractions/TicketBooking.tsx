import React, { useState } from 'react';
import { Calendar, Users, CreditCard } from 'lucide-react';

interface TicketBookingProps {
  attractionName: string;
  price: {
    amount: number;
    currency: string;
  };
  onClose: () => void;
}

const TicketBooking: React.FC<TicketBookingProps> = ({ attractionName, price, onClose }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    quantity: 1,
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    accessibilityNeeds: [] as string[],
    dietaryRestrictions: '',
    emergencyContact: {
      name: '',
      phone: '',
      relationship: ''
    },
    specialAssistance: '',
    preferredLanguage: '',
    additionalNotes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const bookingDetails = {
        attraction_name: attractionName,
        date: formData.date,
        time: formData.time,
        quantity: formData.quantity,
        total_price: `${price.currency} ${price.amount * formData.quantity}`,
        accessibility_needs: formData.accessibilityNeeds.join(', '),
        dietary_restrictions: formData.dietaryRestrictions || 'None',
        special_assistance: formData.specialAssistance || 'None',
        preferred_language: formData.preferredLanguage,
        additional_notes: formData.additionalNotes || 'None'
      };

      const customerDetails = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      };

      const emergencyContact = {
        name: formData.emergencyContact.name,
        phone: formData.emergencyContact.phone,
        relationship: formData.emergencyContact.relationship
      };

      const emailContent = `
        <h2>Booking Details</h2>
        <p><strong>Attraction:</strong> ${bookingDetails.attraction_name}</p>
        <p><strong>Date:</strong> ${bookingDetails.date}</p>
        <p><strong>Time:</strong> ${bookingDetails.time}</p>
        <p><strong>Number of Tickets:</strong> ${bookingDetails.quantity}</p>
        <p><strong>Total Price:</strong> ${bookingDetails.total_price}</p>
        <p><strong>Accessibility Needs:</strong> ${bookingDetails.accessibility_needs}</p>
        <p><strong>Dietary Restrictions:</strong> ${bookingDetails.dietary_restrictions}</p>
        <p><strong>Special Assistance:</strong> ${bookingDetails.special_assistance}</p>
        <p><strong>Preferred Language:</strong> ${bookingDetails.preferred_language}</p>
        <p><strong>Additional Notes:</strong> ${bookingDetails.additional_notes}</p>

        <h2>Customer Details</h2>
        <p><strong>Name:</strong> ${customerDetails.name}</p>
        <p><strong>Email:</strong> ${customerDetails.email}</p>
        <p><strong>Phone:</strong> ${customerDetails.phone}</p>

        <h2>Emergency Contact</h2>
        <p><strong>Name:</strong> ${emergencyContact.name}</p>
        <p><strong>Phone:</strong> ${emergencyContact.phone}</p>
        <p><strong>Relationship:</strong> ${emergencyContact.relationship}</p>
      `;

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'da091ed8-42eb-4541-ade0-28e5cf1c5168',
          subject: `New Ticket Booking for ${attractionName}`,
          from_name: "AccessTravel Booking System",
          message: emailContent,
          booking_details: bookingDetails,
          customer_details: customerDetails,
          emergency_contact: emergencyContact
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        // Generate random ticket number
        const ticketNumber = Math.random().toString(36).substring(2, 10).toUpperCase();
        alert(`Booking successful! Your ticket number is ${ticketNumber}`);
        onClose();
      } else {
        alert('Failed to submit booking. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('emergency_')) {
      const field = name.split('_')[1];
      setFormData(prev => ({
        ...prev,
        emergencyContact: {
          ...prev.emergencyContact,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleAccessibilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      accessibilityNeeds: e.target.checked
        ? [...prev.accessibilityNeeds, value]
        : prev.accessibilityNeeds.filter(need => need !== value)
    }));
  };

  // Generate time slots
  const timeSlots = [];
  for (let hour = 9; hour <= 17; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, '0')}:00`);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Book Tickets for {attractionName}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Visit Date
              </label>
              <div className="relative">
                <Calendar size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Visit Time
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select time</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Tickets
            </label>
            <div className="relative">
              <Users size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                className="pl-10 w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Accessibility Needs
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="wheelchair"
                  checked={formData.accessibilityNeeds.includes('wheelchair')}
                  onChange={handleAccessibilityChange}
                  className="mr-2"
                />
                Wheelchair Access
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="visual"
                  checked={formData.accessibilityNeeds.includes('visual')}
                  onChange={handleAccessibilityChange}
                  className="mr-2"
                />
                Visual Assistance
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="hearing"
                  checked={formData.accessibilityNeeds.includes('hearing')}
                  onChange={handleAccessibilityChange}
                  className="mr-2"
                />
                Hearing Assistance
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="mobility"
                  checked={formData.accessibilityNeeds.includes('mobility')}
                  onChange={handleAccessibilityChange}
                  className="mr-2"
                />
                Mobility Assistance
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Special Assistance
            </label>
            <input
              type="text"
              name="specialAssistance"
              value={formData.specialAssistance}
              onChange={handleChange}
              placeholder="Any specific assistance you need"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Language
            </label>
            <select
              name="preferredLanguage"
              value={formData.preferredLanguage}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select language</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="chinese">Chinese</option>
              <option value="japanese">Japanese</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dietary Restrictions
            </label>
            <input
              type="text"
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={handleChange}
              placeholder="e.g., Vegetarian, Gluten-free, Allergies"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-4">Emergency Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Name
                </label>
                <input
                  type="text"
                  name="emergency_name"
                  value={formData.emergencyContact.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  name="emergency_phone"
                  value={formData.emergencyContact.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Relationship
              </label>
              <input
                type="text"
                name="emergency_relationship"
                value={formData.emergencyContact.relationship}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Notes
            </label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={3}
              placeholder="Any additional information you'd like us to know..."
            ></textarea>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
            
            <div className="mb-4">
              <p className="text-xl font-bold text-primary-600">
                Total: {price.currency} {price.amount * formData.quantity}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <div className="relative">
                  <CreditCard size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    className="pl-10 w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
            >
              Purchase Tickets
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketBooking;