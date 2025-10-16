export default function DashboardCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-2xl font-bold text-green-700 mt-2">{value}</h3>
        </div>
        <span className="text-3xl">{icon}</span>
      </div>
    </div>
  );
}
