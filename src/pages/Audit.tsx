import { useState, useRef } from 'react';
import { Search, Filter, Download, Eye, Shield, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Audit = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const recordsRef = useRef<HTMLDivElement>(null); // 👈 ref for Transaction Records

  const auditRecords = [
    {
      id: 'TXN001',
      action: 'Identity Verification',
      user: 'XXXX-XXXX-4532',
      timestamp: '2024-03-15 14:30:25',
      status: 'Success',
      hash: '0x7a8b9c2d1e0f5a6b7c8d9e0f1a2b3c4d5e6f7a8b',
      type: 'verification'
    },
    {
      id: 'TXN002',
      action: 'Voter Registration',
      user: 'XXXX-XXXX-8901',
      timestamp: '2024-03-15 14:28:15',
      status: 'Success',
      hash: '0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c',
      type: 'registration'
    },
    {
      id: 'TXN003',
      action: 'Profile Update',
      user: 'XXXX-XXXX-2345',
      timestamp: '2024-03-15 14:25:10',
      status: 'Success',
      hash: '0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d',
      type: 'update'
    },
    {
      id: 'TXN004',
      action: 'Fraud Detection Alert',
      user: 'XXXX-XXXX-6789',
      timestamp: '2024-03-15 14:20:45',
      status: 'Flagged',
      hash: '0x4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e',
      type: 'alert'
    },
    {
      id: 'TXN005',
      action: 'Identity Verification',
      user: 'XXXX-XXXX-1122',
      timestamp: '2024-03-15 14:18:30',
      status: 'Failed',
      hash: '0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f',
      type: 'verification'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Success':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'Failed':
        return 'bg-destructive/20 text-destructive border-destructive/30';
      case 'Flagged':
        return 'bg-accent/20 text-accent border-accent/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'verification':
        return Shield;
      case 'registration':
        return Eye;
      case 'alert':
        return Filter;
      default:
        return Clock;
    }
  };

  const filteredRecords = auditRecords.filter(record =>
    record.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.user.includes(searchTerm) ||
    record.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 👇 Export to PDF function
  const handleExportPDF = async () => {
    const element = recordsRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * pageWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pdfHeight);
    pdf.save("transaction-records.pdf");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold font-poppins text-foreground mb-4">
              Audit <span className="text-accent">Trail</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete transparency with blockchain-backed immutable records
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">1,247</div>
                <div className="text-sm text-muted-foreground">Total Transactions</div>
              </CardContent>
            </Card>
            <Card className="glass-card border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-accent mb-2">98.7%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </CardContent>
            </Card>
            <Card className="glass-card border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-lotus-gold mb-2">0.8s</div>
                <div className="text-sm text-muted-foreground">Avg Response</div>
              </CardContent>
            </Card>
            <Card className="glass-card border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-chakra-blue mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </CardContent>
            </Card>
          </div>

          {/* Controls */}
          <Card className="glass-card border-white/20 mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by transaction ID, user, or action..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 glass border-white/30 focus:border-accent/50"
                  />
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" className="btn-glass">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  {/* 👇 Export Button now triggers PDF */}
                  <Button className="btn-saffron" onClick={handleExportPDF}>
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Audit Records */}
          <Card className="glass-card border-white/20" ref={recordsRef}>
            <CardHeader>
              <CardTitle className="text-2xl font-poppins text-foreground">
                Transaction Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredRecords.map((record, index) => {
                  const TypeIcon = getTypeIcon(record.type);
                  
                  return (
                    <div
                      key={record.id}
                      className="glass p-6 rounded-xl hover:bg-white/15 transition-all duration-300 cursor-pointer group"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-lg bg-accent/10">
                            <TypeIcon className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                              {record.action}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Transaction ID: {record.id}
                            </p>
                          </div>
                        </div>
                        
                        <Badge className={getStatusColor(record.status)}>
                          {record.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">User ID:</span>
                          <div className="font-mono text-foreground">{record.user}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Timestamp:</span>
                          <div className="text-foreground">{record.timestamp}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Blockchain Hash:</span>
                          <div className="font-mono text-foreground break-all">
                            {record.hash.substring(0, 20)}...
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-primary" />
                          <span className="text-xs text-muted-foreground">
                            Verified on blockchain
                          </span>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-accent hover:text-accent/80"
                        >
                          <Eye className="mr-1 h-3 w-3" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredRecords.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-muted-foreground mb-4">No records found matching your search.</div>
                  <Button
                    variant="outline"
                    onClick={() => setSearchTerm('')}
                    className="btn-glass"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Audit;
