import { useState } from 'react';
import { Users, AlertTriangle, CheckCircle, BarChart3, Shield, TrendingUp, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Total Users',
      value: '12,847',
      change: '+12%',
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Pending Reviews',
      value: '23',
      change: '-8%',
      icon: AlertTriangle,
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      title: 'Verified Today',
      value: '1,247',
      change: '+24%',
      icon: CheckCircle,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Fraud Alerts',
      value: '3',
      change: '-50%',
      icon: Shield,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10'
    }
  ];

  const pendingReviews = [
    {
      id: 'REV001',
      userId: 'XXXX-XXXX-4532',
      reason: 'Document Mismatch',
      priority: 'High',
      submittedAt: '2 hours ago'
    },
    {
      id: 'REV002',
      userId: 'XXXX-XXXX-8901',
      reason: 'Duplicate Registration',
      priority: 'Medium',
      submittedAt: '4 hours ago'
    },
    {
      id: 'REV003',
      userId: 'XXXX-XXXX-2345',
      reason: 'Age Verification',
      priority: 'Low',
      submittedAt: '6 hours ago'
    }
  ];

  const fraudAlerts = [
    {
      id: 'ALT001',
      type: 'Multiple Registrations',
      severity: 'Critical',
      affectedUsers: 5,
      detectedAt: '1 hour ago'
    },
    {
      id: 'ALT002',
      type: 'Suspicious Location',
      severity: 'Medium',
      affectedUsers: 2,
      detectedAt: '3 hours ago'
    },
    {
      id: 'ALT003',
      type: 'Document Anomaly',
      severity: 'Low',
      affectedUsers: 1,
      detectedAt: '5 hours ago'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-destructive/20 text-destructive border-destructive/30';
      case 'Medium':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'Low':
        return 'bg-primary/20 text-primary border-primary/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-destructive/20 text-destructive border-destructive/30';
      case 'Medium':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'Low':
        return 'bg-primary/20 text-primary border-primary/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold font-poppins text-foreground mb-4">
              Admin <span className="text-accent">Panel</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Monitor system health, review registrations, and detect fraud
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={stat.title} className="glass-card border-white/20 hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className={`text-sm font-medium ${
                      stat.change.startsWith('+') ? 'text-primary' : 'text-destructive'
                    }`}>
                      {stat.change}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="glass border-white/20">
              <TabsTrigger value="overview" className="data-[state=active]:bg-accent/20">
                Overview
              </TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-accent/20">
                Review Queue
              </TabsTrigger>
              <TabsTrigger value="fraud" className="data-[state=active]:bg-accent/20">
                Fraud Detection
              </TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-accent/20">
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* System Health */}
                <Card className="glass-card border-white/20">
                  <CardHeader>
                    <CardTitle className="text-xl font-poppins text-foreground flex items-center space-x-2">
                      <Activity className="h-5 w-5 text-primary" />
                      <span>System Health</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">API Response Time</span>
                        <span className="text-sm font-medium text-primary">0.8s</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">Blockchain Sync</span>
                        <span className="text-sm font-medium text-primary">100%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">Database Load</span>
                        <span className="text-sm font-medium text-accent">67%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full" style={{width: '67%'}}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card className="glass-card border-white/20">
                  <CardHeader>
                    <CardTitle className="text-xl font-poppins text-foreground flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-accent" />
                      <span>Recent Activity</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full pulse-saffron"></div>
                        <div className="flex-1">
                          <p className="text-sm text-foreground">124 new registrations</p>
                          <p className="text-xs text-muted-foreground">Last hour</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm text-foreground">3 fraud alerts resolved</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-lotus-gold rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm text-foreground">System backup completed</p>
                          <p className="text-xs text-muted-foreground">4 hours ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <Card className="glass-card border-white/20">
                <CardHeader>
                  <CardTitle className="text-xl font-poppins text-foreground">
                    Pending Reviews ({pendingReviews.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pendingReviews.map((review, index) => (
                    <div
                      key={review.id}
                      className="glass p-6 rounded-xl hover:bg-white/15 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-foreground">Review ID: {review.id}</h3>
                          <p className="text-sm text-muted-foreground">User: {review.userId}</p>
                        </div>
                        <Badge className={getPriorityColor(review.priority)}>
                          {review.priority}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-foreground mb-1">Reason: {review.reason}</p>
                          <p className="text-xs text-muted-foreground">Submitted: {review.submittedAt}</p>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button size="sm" className="btn-green">
                            Approve
                          </Button>
                          <Button size="sm" variant="outline" className="btn-glass">
                            Review
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="fraud" className="space-y-6">
              <Card className="glass-card border-white/20">
                <CardHeader>
                  <CardTitle className="text-xl font-poppins text-foreground">
                    Fraud Alerts ({fraudAlerts.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {fraudAlerts.map((alert, index) => (
                    <div
                      key={alert.id}
                      className="glass p-6 rounded-xl hover:bg-white/15 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-foreground">{alert.type}</h3>
                          <p className="text-sm text-muted-foreground">Alert ID: {alert.id}</p>
                        </div>
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-foreground mb-1">
                            Affected Users: {alert.affectedUsers}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Detected: {alert.detectedAt}
                          </p>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button size="sm" className="btn-saffron">
                            Investigate
                          </Button>
                          <Button size="sm" variant="outline" className="btn-glass">
                            Dismiss
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="glass-card border-white/20">
                  <CardHeader>
                    <CardTitle className="text-xl font-poppins text-foreground">
                      Registration Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center text-muted-foreground">
                      <BarChart3 className="h-16 w-16 opacity-50" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-card border-white/20">
                  <CardHeader>
                    <CardTitle className="text-xl font-poppins text-foreground">
                      Geographic Distribution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center text-muted-foreground">
                      <Activity className="h-16 w-16 opacity-50" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Admin;