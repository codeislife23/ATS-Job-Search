import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Site } from '../types';

interface JobSearchFormProps {
  sites: Site[];
}

export default function JobSearchForm({ sites }: JobSearchFormProps) {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [selectedSites, setSelectedSites] = useState<Record<string, boolean>>(
    Object.fromEntries(sites.map(site => [site.domain, false]))
  );
  const [errorMessage, setErrorMessage] = useState('');

  const handleSiteToggle = (domain: string) => {
    setSelectedSites(prev => ({ ...prev, [domain]: !prev[domain] }));
  };

  const generateSearchUrls = () => {
    const baseQuery = `"${jobTitle}" ${location || 'Remote'}`;
    return Object.entries(selectedSites)
      .filter(([_, isSelected]) => isSelected)
      .map(([domain]) => {
        const encodedQuery = encodeURIComponent(`site:${domain} AND ${baseQuery}`);
        return `https://www.google.com/search?q=${encodedQuery}`;
      });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobTitle.trim()) {
      setErrorMessage('Please enter a job title');
      return;
    }
    
    const urls = generateSearchUrls();
    if (urls.length === 0) {
      setErrorMessage('Please select at least one site to search');
      return;
    }

    setErrorMessage('');
    urls.forEach((url, index) => {
      setTimeout(() => window.open(url, '_blank'), index * 300);
    });
  };

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-xl p-6 space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
            Job Title
          </label>
          <input
            id="jobTitle"
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="e.g. Frontend Developer"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location (optional)
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Remote, New York, SF Bay Area"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Select ATS Platforms
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {sites.map((site) => (
            <label
              key={site.domain}
              className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                selectedSites[site.domain]
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-200 hover:border-indigo-200'
              }`}
            >
              <input
                type="checkbox"
                checked={selectedSites[site.domain]}
                onChange={() => handleSiteToggle(site.domain)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-colors"
              />
              <span className="ml-2 text-sm">{site.name}</span>
            </label>
          ))}
        </div>
      </div>

      {errorMessage && (
        <div className="text-red-500 text-sm text-center">{errorMessage}</div>
      )}

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
      >
        <Search className="w-5 h-5" />
        Search Jobs
      </button>
    </form>
  );
}