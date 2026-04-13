"use client";

import { useState } from 'react';
import axios from 'axios';

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      // In a real scenario, NEXT_PUBLIC_API_URL should define the NestJS endpoint
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
      await axios.post(`${apiUrl}/enquiry`, formData);
      setStatus('success');
      setFormData({ name: '', contactNumber: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:px-8 bg-slate-50 p-8 rounded-3xl shadow-xl border border-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Plan Your Trip</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Leave your contact details and we&apos;ll reach out to customize your perfect Kashmir experience.
          </p>
        </div>
        
        {status === 'success' && (
          <div className="mt-8 bg-emerald-50 text-emerald-800 p-4 rounded-xl border border-emerald-200">
            Thank you! We have received your details and will contact you shortly.
          </div>
        )}

        {status === 'error' && (
          <div className="mt-8 bg-red-50 text-red-800 p-4 rounded-xl border border-red-200">
            Something went wrong. Please try again later.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-10 mx-auto max-w-xl sm:mt-12">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium leading-6 text-gray-900">
                Contact Number
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="contactNumber"
                  id="contactNumber"
                  required
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="block w-full rounded-md bg-emerald-600 px-3.5 py-4 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:opacity-50 transition-colors"
            >
              {status === 'submitting' ? 'Submitting...' : 'Request Callback'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
