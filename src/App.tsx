import React, { useState } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';
import JobSearchForm from './components/JobSearchForm';
import { sites } from './data/sites';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Search className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">ATS Job Search</h1>
          </div>
          <p className="text-gray-600">Search across multiple ATS platforms in one click</p>
        </div>
        <JobSearchForm sites={sites} />
        
        <footer className="mt-8 text-center text-sm text-gray-500">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Search by location</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              <span>Multiple ATS platforms</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;