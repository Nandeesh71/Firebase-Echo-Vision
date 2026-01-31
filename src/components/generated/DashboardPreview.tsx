import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, DollarSign, Activity, Calendar, Settings, Bell } from 'lucide-react';
import type { SVGProps } from 'react';

// @component: DashboardPreview
export const DashboardPreview = () => {
  type ChartDatum = { month: string; value: number };
  type Metric = { icon: React.FC<SVGProps<SVGSVGElement>>; label: string; value: string; change: string; positive: boolean };

  const chartData: ChartDatum[] = [{
    month: 'Jan',
    value: 65
  }, {
    month: 'Feb',
    value: 78
  }, {
    month: 'Mar',
    value: 52
  }, {
    month: 'Apr',
    value: 84
  }, {
    month: 'May',
    value: 91
  }, {
    month: 'Jun',
    value: 76
  }];
  const metrics: Metric[] = [{
    icon: DollarSign,
    label: 'Revenue',
    value: '$124,592',
    change: '+12.5%',
    positive: true
  }, {
    icon: Users,
    label: 'Active Users',
    value: '8,429',
    change: '+8.2%',
    positive: true
  }, {
    icon: Activity,
    label: 'Conversion',
    value: '3.24%',
    change: '-2.1%',
    positive: false
  }, {
    icon: TrendingUp,
    label: 'Growth',
    value: '23.1%',
    change: '+15.3%',
    positive: true
  }];

  // @return
  return <div className="relative bg-card border border-border rounded-xl shadow-2xl overflow-hidden transform perspective-1000 rotate-x-2">
      <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                <span>Analytics Dashboard</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                <span>Real-time business insights</span>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-accent rounded-lg transition-colors">
              <Bell className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="p-2 hover:bg-accent rounded-lg transition-colors">
              <Settings className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => <motion.div key={metric.label} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-muted/50 rounded-lg p-4 border border-border/50">
              <div className="flex items-center justify-between mb-2">
                <metric.icon className="w-5 h-5 text-primary" />
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${metric.positive ? 'bg-chart-1/20 text-chart-1' : 'bg-destructive/20 text-destructive'}`}>
                  {metric.change}
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-foreground">
                  <span>{metric.value}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  <span>{metric.label}</span>
                </p>
              </div>
            </motion.div>)}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-muted/30 rounded-lg p-6 border border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-foreground">
                <span>Revenue Trend</span>
              </h4>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Last 6 months</span>
              </div>
            </div>
            <div className="h-48 flex items-end justify-between space-x-2">
              {chartData.map((item, index) => <div key={item.month} className="flex flex-col items-center space-y-2 flex-1">
                  <motion.div initial={{
                height: 0
              }} animate={{
                height: `${item.value}%`
              }} transition={{
                duration: 0.8,
                delay: index * 0.1
              }} className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t-sm min-h-[20px]" />
                  <span className="text-xs text-muted-foreground">{item.month}</span>
                </div>)}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
              <h5 className="font-medium text-foreground mb-3">
                <span>Top Performing</span>
              </h5>
              <div className="space-y-3">
                {['Product Analytics', 'User Engagement', 'Sales Funnel'].map((item, index) => <div key={item} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{item}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div initial={{
                      width: 0
                    }} animate={{
                      width: `${85 - index * 15}%`
                    }} transition={{
                      duration: 1,
                      delay: 0.5 + index * 0.1
                    }} className="h-full bg-primary rounded-full" />
                      </div>
                      <span className="text-xs font-medium text-foreground">
                        {85 - index * 15}%
                      </span>
                    </div>
                  </div>)}
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
              <h5 className="font-medium text-foreground mb-3">
                <span>Recent Activity</span>
              </h5>
              <div className="space-y-2">
                {['New user registered', 'Payment processed', 'Report generated'].map((activity, index) => <div key={activity} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">{activity}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
