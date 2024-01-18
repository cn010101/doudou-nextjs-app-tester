import Link from "next/link";
export default function DashboardPage() {
  return (
    <>
      <h1>Dashboard Page</h1>
      <div>
        <Link href="/dashboard/settings">Settings(设置页面)</Link>
      </div>
    </>
  );
}
