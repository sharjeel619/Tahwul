import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { StatusItem, CategoryCard } from '@/lib/types/types';

const StatusCircle = ({ item }: { item: StatusItem }) => {
  const colors = {
    'not-started': 'bg-muted text-white',
    'in-progress': 'bg-warning text-white',
    'completed': 'bg-success text-white',
    'partially-uploaded': 'bg-primary text-white',
    'fully-uploaded': 'bg-info text-white',
    'delayed': 'bg-red text-white'
  };

  return (
    <div className={`w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-[10px] md:text-[11px] font-bold ${colors[item.status]}`}>
      {item.id}
    </div>
  );
};

const ProgressStatus = ({ categories }: { categories: CategoryCard[] }) => {
  return (
    <Card>
      <CardHeader className="flex flex-col lg:flex-row lg:items-center justify-between mt-3">
        <CardTitle className="text-base mt-0">Progress Status</CardTitle>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:text-xs text-slate-500 capitalize ">
          {[
            { color: 'bg-secondary', label: 'Not Started' },
            { color: 'bg-warning', label: 'In Progress' },
            { color: 'bg-success', label: 'Completed' },
            { color: 'bg-primary', label: 'Partially Uploaded' },
            { color: 'bg-info', label: 'Fully Uploaded' },
            { color: 'bg-error', label: 'Delayed' },
          ].map((status, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${status.color}`}></span>
              <p className='text-sm'>{status.label}</p>
            </div>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col space-y-3">
              <div className="bg-primary rounded-lg p-3 h-auto min-h-17.5 flex flex-col justify-center items-center text-center">
                <h3 className="text-xs font-bold text-white capitalize mb-2 px-1">
                  {cat.title}
                </h3>
                <div className="bg-white/10 px-2 py-0.5 rounded-xl text-sm font-bold text-white">
                  {cat.percentage}
                </div>
              </div>

              <div className="space-y-2 flex-1">
                {cat.subCategories.map((sub, sIdx) => (
                  <div key={sIdx} className="bg-grey rounded-lg p-2 md:p-3 border border-muted">
                    <p className="text-[10px] capitalize mb-2 text-center leading-tight">
                      {sub.name}
                    </p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {sub.items.map((item, iIdx) => (
                        <StatusCircle key={iIdx} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

  );
};

export default ProgressStatus;
