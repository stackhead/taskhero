import { motion } from 'framer-motion';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export function ProductPreview() {
  const tasks = [
    { id: 1, title: 'Design new landing page', status: 'todo', priority: 'high' },
    { id: 2, title: 'Implement user authentication', status: 'todo', priority: 'medium' },
    { id: 3, title: 'Fix navigation bug', status: 'progress', priority: 'high' },
    { id: 4, title: 'Update documentation', status: 'progress', priority: 'low' },
    { id: 5, title: 'Deploy to production', status: 'done', priority: 'high' },
    { id: 6, title: 'Set up analytics', status: 'done', priority: 'medium' }
  ];

  const columns = [
    { id: 'todo', title: 'To Do', icon: AlertCircle, color: 'text-slate-500' },
    { id: 'progress', title: 'In Progress', icon: Clock, color: 'text-primary' },
    { id: 'done', title: 'Done', icon: CheckCircle2, color: 'text-green-500' }
  ];

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-light dark:text-text-dark mb-4">
            Beautiful boards that work
          </h2>
          <p className="text-xl text-text-mutedLight dark:text-text-mutedDark max-w-2xl mx-auto">
            Visualize your workflow with our intuitive drag-and-drop interface
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-3xl" />

          <div className="relative bg-surface-light dark:bg-surface-dark border-2 border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-8 overflow-x-auto">
            <div className="flex gap-6 min-w-max pb-4">
              {columns.map((column, colIdx) => (
                <motion.div
                  key={column.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: colIdx * 0.1 }}
                  className="flex-shrink-0 w-80"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <column.icon className={`w-5 h-5 ${column.color}`} />
                    <h3 className="font-semibold text-text-light dark:text-text-dark">
                      {column.title}
                    </h3>
                    <span className="ml-auto text-xs text-text-mutedLight dark:text-text-mutedDark bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                      {tasks.filter(t => t.status === column.id).length}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {tasks
                      .filter(task => task.status === column.id)
                      .map((task, idx) => (
                        <motion.div
                          key={task.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: colIdx * 0.1 + idx * 0.05 }}
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 shadow-sm hover:shadow-md hover:border-primary/50 transition-all cursor-pointer"
                        >
                          <p className="text-sm font-medium text-text-light dark:text-text-dark mb-2">
                            {task.title}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              task.priority === 'high'
                                ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                                : task.priority === 'medium'
                                ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                            }`}>
                              {task.priority}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
