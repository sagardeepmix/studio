
"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getLatestResults, Result } from '@/services/results';
import { format } from 'date-fns';

export default function ResultsPage() {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const fetchedResults = await getLatestResults();
        setResults(fetchedResults);
        setError(null);
      } catch (err) {
        setError("Failed to load results. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  const todayResults = results.length > 0 ? results[0] : null;

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">Lottery Results</h1>
          <p className="text-gray-600 mt-2">Check the latest winning numbers.</p>
        </header>

        <Card className="w-full max-w-2xl mx-auto p-6 rounded-2xl shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] border-none bg-background mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-semibold">
              <Search className="text-primary"/>
              Check Your Ticket
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Input placeholder="Enter ticket number" className="bg-background border-none rounded-full h-12 px-4 text-base shadow-[inset_3px_3px_7px_#d9d9d9,inset_-3px_-3px_7px_#ffffff]" />
            <Button className="rounded-full h-12 px-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg">Check</Button>
          </CardContent>
        </Card>

        <Card className="p-6 rounded-2xl shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] border-none bg-background">
           <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                    <Calendar className="text-primary"/>
                    Today's Results
                </CardTitle>
                {todayResults && <p className="text-gray-500 text-sm">Date: {format(todayResults.drawDate, 'PP')}</p>}
           </CardHeader>
           <CardContent>
                {loading && (
                  <div className="flex justify-center items-center h-40">
                    <Loader2 className="animate-spin text-primary" size={48} />
                  </div>
                )}
                {error && <p className="text-destructive text-center">{error}</p>}
                {!loading && !error && results.length === 0 && (
                  <p className="text-gray-600 text-center h-40 flex items-center justify-center">No results found.</p>
                )}
                {!loading && !error && results.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                      {results.map((result) => (
                         <div key={result.id} className={`p-4 rounded-xl ${result.prizeName === '1st Prize' ? 'bg-background shadow-[inset_5px_5px_10px_#d9d9d9,inset_-5px_-5px_10px_#ffffff]' : 'bg-background shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]'}`}>
                            <p className="text-sm text-gray-500">{result.prizeName}</p>
                            <p className={`text-2xl font-bold ${result.prizeName === '1st Prize' ? 'text-primary' : ''}`}>{result.prizeAmount}</p>
                            <p className="font-mono text-lg mt-1">{result.winningNumber}</p>
                        </div>
                      ))}
                  </div>
                )}
           </CardContent>
        </Card>

      </div>
    </div>
  );
}
