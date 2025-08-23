import { CheckCircle, AlertTriangle, Clock, Shield, BarChart3, Users, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const Dashboard = () => {
  const stats = [
    {
      title: 'Verification Status',
      value: 'Verified',
      icon: CheckCircle,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Registration Date',
      value: 'Mar 15, 2024',
      icon: Clock,
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      title: 'Security Score',
      value: '98/100',
      icon: Shield,
      color: 'text-lotus-gold',
      bgColor: 'bg-lotus-gold/10'
    },
    {
      title: 'Last Updated',
      value: '2 hours ago',
      icon: BarChart3,
      color: 'text-chakra-blue',
      bgColor: 'bg-chakra-blue/10'
    }
  ];

  const recentActivity = [
    {
      action: 'Identity Verified',
      timestamp: '2 hours ago',
      status: 'success',
      details: 'Aadhaar and Voter ID successfully linked'
    },
    {
      action: 'Blockchain Record Created',
      timestamp: '2 hours ago',
      status: 'success',
      details: 'Immutable record created on blockchain'
    },
    {
      action: 'Security Scan Completed',
      timestamp: '1 day ago',
      status: 'success',
      details: 'No suspicious activity detected'
    },
    {
      action: 'Profile Updated',
      timestamp: '3 days ago',
      status: 'info',
      details: 'Mobile number updated'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold font-poppins text-foreground mb-4">
              Welcome Back, <span className="text-accent">Citizen</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your digital identity dashboard - secure, verified, and blockchain-protected
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={stat.title} className="glass-card border-white/20 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Verification Status */}
            <div className="lg:col-span-2">
              <Card className="glass-card border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins text-foreground flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <span>Verification Status</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Identity Status */}
                  <div className="glass p-6 rounded-xl border-l-4 border-primary">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-6 w-6 text-primary" />
                        <h3 className="text-lg font-semibold text-foreground">Identity Verified</h3>
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary/30">Active</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Your Aadhaar and Voter ID have been successfully verified and linked to your blockchain identity.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>Verification ID: VeriSafe-2024-001</span>
                      <span>•</span>
                      <span>Blockchain Hash: 0x7a8b9c...</span>
                    </div>
                  </div>

                  {/* Security Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="glass p-4 rounded-xl">
                      <div className="flex items-center space-x-3 mb-2">
                        <Shield className="h-5 w-5 text-accent" />
                        <h4 className="font-semibold text-foreground">Privacy Protection</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Zero-knowledge proofs ensure your data remains private
                      </p>
                    </div>
                    
                    <div className="glass p-4 rounded-xl">
                      <div className="flex items-center space-x-3 mb-2">
                        <FileText className="h-5 w-5 text-lotus-gold" />
                        <h4 className="font-semibold text-foreground">Immutable Records</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Your verification is permanently secured on blockchain
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="btn-saffron">
                      Download Certificate
                    </Button>
                  <Button variant="outline" className="btn-glass">
                      View Audit Trail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Activity Sidebar */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <Card className="glass-card border-white/20">
                <CardHeader>
                  <CardTitle className="text-lg font-poppins text-foreground">
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 pb-4 border-b border-white/10 last:border-b-0 last:pb-0">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.status === 'success' ? 'bg-primary' : 'bg-accent'
                      }`}></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.details}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="glass-card border-white/20">
                <CardHeader>
                  <CardTitle className="text-lg font-poppins text-foreground">
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full btn-glass justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Update Profile
                  </Button>
                  <Button variant="outline" className="w-full btn-glass justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    View Reports
                  </Button>
                  <Button variant="outline" className="w-full btn-glass justify-start">
                    <Shield className="mr-2 h-4 w-4" />
                    Security Settings
                  </Button>
                </CardContent>
              </Card>

              {/* Trust Score */}
              <Card className="glass-card border-white/20">
                <CardHeader>
                  <CardTitle className="text-lg font-poppins text-foreground">
                    Trust Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">98</div>
                    <div className="text-sm text-muted-foreground mb-4">Excellent Security</div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;