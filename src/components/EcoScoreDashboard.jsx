import React from 'react';
import { motion } from 'framer-motion';

const Ring = ({ size = 180, stroke = 14, progress = 0.72, color = '#10b981', label = 'EcoScore' }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);
  return (
    <div className="relative flex flex-col items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1.2s ease' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-4xl font-extrabold text-white">{Math.round(progress * 100)}</div>
        <div className="text-xs uppercase tracking-wider text-emerald-100/80">{label}</div>
      </div>
    </div>
  );
};

const EcoScoreDashboard = () => {
  return (
    <section id="dashboard" className="relative w-full py-20 bg-gradient-to-b from-emerald-900 to-emerald-950 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">EcoScore Dashboard</h2>
            <p className="text-emerald-100/80 mt-2 max-w-2xl">
              A quick snapshot of your daily carbon impact. Watch your footprint shrink as you build green habits.
            </p>
          </div>
          <div className="rounded-full bg-white/10 px-4 py-2 text-emerald-100 ring-1 ring-white/10 backdrop-blur">
            Your EcoScore: <span className="font-semibold text-white">78</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10 backdrop-blur-lg"
          >
            <h3 className="mb-4 text-lg font-semibold">Emissions Breakdown</h3>
            <div className="space-y-4">
              {[{label:'Travel',val:45,color:'bg-emerald-400'}, {label:'Energy',val:35,color:'bg-emerald-500'}, {label:'Waste',val:20,color:'bg-emerald-600'}].map((item)=> (
                <div key={item.label}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-emerald-100/90">{item.label}</span>
                    <span className="text-emerald-100/70">{item.val}%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full ${item.color}`} style={{ width: `${item.val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl bg-gradient-to-br from-emerald-400/20 to-emerald-200/10 p-6 ring-1 ring-white/10"
          >
            <div className="grid grid-cols-3 gap-6 place-items-center py-6">
              <Ring progress={0.78} label="EcoScore" />
              <Ring progress={0.64} color="#34d399" label="Energy" />
              <Ring progress={0.41} color="#059669" label="Travel" />
            </div>
            <div className="text-sm text-emerald-100/80">
              Your footprint is trending down this week. Keep it up with eco-routes and energy tweaks.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcoScoreDashboard;
