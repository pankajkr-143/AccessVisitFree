import React, { useState } from 'react';
import { Calendar, Users, CreditCard } from 'lucide-react';
import toast from 'react-hot-toast';

interface BookingFormProps {
  itemName: string;
  itemType: 'accommodation' | 'attraction';
  price?: {
    amount: number;
    currency: string;
  };
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ itemName, itemType, price, onClose }) => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    specialRequirements: '',
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
    estimatedArrivalTime: '',
    travelPurpose: '',
    additionalNotes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const bookingDetails = {
        item_name: itemName,
        item_type: itemType,
        check_in: formData.checkIn,
        check_out: formData.checkOut,
        guests: formData.guests,
        total_price: price ? `${price.currency} ${price.amount}` : 'Not specified',
        accessibility_needs: formData.accessibilityNeeds.join(', '),
        dietary_restrictions: formData.dietaryRestrictions || 'None',
        estimated_arrival: formData.estimatedArrivalTime,
        travel_purpose: formData.travelPurpose,
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
        <p><strong>${itemType === 'accommodation' ? 'Accommodation' : 'Attraction'}:</strong> ${bookingDetails.item_name}</p>
        <p><strong>Check-in:</strong> ${bookingDetails.check_in}</p>
        <p><strong>Check-out:</strong> ${bookingDetails.check_out}</p>
        <p><strong>Number of Guests:</strong> ${bookingDetails.guests}</p>
        <p><strong>Total Price:</strong> ${bookingDetails.total_price}</p>
        <p><strong>Accessibility Needs:</strong> ${bookingDetails.accessibility_needs}</p>
        <p><strong>Dietary Restrictions:</strong> ${bookingDetails.dietary_restrictions}</p>
        <p><strong>Estimated Arrival:</strong> ${bookingDetails.estimated_arrival}</p>
        <p><strong>Travel Purpose:</strong> ${bookingDetails.travel_purpose}</p>
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
          subject: `New Booking Request for ${itemName}`,
          from_name: "AccessTravel Booking System",
          message: emailContent,
          booking_details: bookingDetails,
          customer_details: customerDetails,
          emergency_contact: emergencyContact
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        toast.success('Booking request submitted successfully!');
        onClose();
      } else {
        toast.error('Failed to submit booking. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Book {itemName}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="hidden" name="from_name" value="AccessTravel Booking System" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          {itemType === 'accommodation' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-in Date
                </label>
                <div className="relative">
                  <Calendar size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="pl-10 w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Check-out Date
                </label>
                <div className="relative">
                  <Calendar size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="pl-10 w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Guests
            </label>
            <div className="relative">
              <Users size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                name="guests"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                className="pl-10 w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Estimated Arrival Time
            </label>
            <input
              type="time"
              name="estimatedArrivalTime"
              value={formData.estimatedArrivalTime}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Purpose of Travel
            </label>
            <select
              name="travelPurpose"
              value={formData.travelPurpose}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select purpose</option>
              <option value="leisure">Leisure</option>
              <option value="business">Business</option>
              <option value="medical">Medical</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
            </select>
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Special Requirements
            </label>
            <textarea
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={3}
            ></textarea>
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
            
            {price && (
              <div className="mb-4">
                <p className="text-xl font-bold text-primary-600">
                  Total: {price.currency} {price.amount}
                </p>
              </div>
            )}

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
              disabled={isSubmitting}
              className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Processing...' : 'Confirm Booking'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;