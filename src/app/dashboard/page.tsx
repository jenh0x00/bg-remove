import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  const user = session.user;
  const name = user.name ?? "User";
  const email = user.email ?? "";
  const avatar = user.image ?? "";

  // Placeholder data — will connect to D1 database later
  const balance = 3; // 初始赠送3 credits
  const totalUsed = 0;
  const planName = "Free";

  const recentJobs = [
    // 示例数据，等数据库接入后替换
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-semibold text-gray-900">BGRemover</span>
            <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              ← Back to tool
            </a>
            <form
              action={async () => {
                "use server";
                await signOut({ callbackUrl: "/" });
              }}
            >
              <button
                type="submit"
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Your account</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage your plan, track usage, and access your processing history.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Plan Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-500">Current plan</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                {planName}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{planName}</p>
            <p className="mt-1 text-xs text-gray-500">Upgrade for more credits and HD downloads</p>
            <a
              href="/#pricing"
              className="mt-4 inline-block text-sm text-blue-600 hover:underline font-medium"
            >
              Upgrade plan →
            </a>
          </div>

          {/* Credits Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Available credits</h3>
            <p className="text-2xl font-bold text-gray-900">{balance}</p>
            <p className="mt-1 text-xs text-gray-500">
              {balance === 0
                ? "You've used all your credits. Buy more to keep going."
                : "Each image removal uses 1 credit."}
            </p>
            {balance < 5 && (
              <a
                href="/#pricing"
                className="mt-4 inline-block text-sm text-blue-600 hover:underline font-medium"
              >
                Buy credits →
              </a>
            )}
          </div>

          {/* Usage Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Images processed</h3>
            <p className="text-2xl font-bold text-gray-900">{totalUsed}</p>
            <p className="mt-1 text-xs text-gray-500">Total images processed with this account</p>
          </div>
        </div>

        {/* Upgrade CTA Banner */}
        <div className="bg-blue-600 rounded-xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Need more credits?</h3>
            <p className="mt-1 text-sm text-blue-100">
              Buy credits packs or upgrade to Pro for monthly credits and HD downloads.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="/#pricing"
              className="px-5 py-2.5 bg-white text-blue-700 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Buy credits
            </a>
            <a
              href="/#pricing"
              className="px-5 py-2.5 border border-blue-400 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors"
            >
              View plans
            </a>
          </div>
        </div>

        {/* Recent Jobs */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent activity</h2>
          </div>

          {recentJobs.length === 0 ? (
            <div className="text-center py-10">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">No processing history yet.</p>
              <p className="mt-1 text-xs text-gray-400">
                Images you process will appear here once you start using the tool.
              </p>
              <a
                href="/"
                className="mt-4 inline-block text-sm text-blue-600 hover:underline font-medium"
              >
                Go to tool →
              </a>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-100">
                    <th className="pb-3 font-medium">File</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Credits</th>
                    <th className="pb-3 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentJobs.map((job: { id: number; filename: string; status: string; credits: number; date: string }) => (
                    <tr key={job.id} className="border-b border-gray-50 last:border-0">
                      <td className="py-3 text-gray-900">{job.filename}</td>
                      <td className="py-3">
                        <span className="text-green-600 capitalize">{job.status}</span>
                      </td>
                      <td className="py-3 text-gray-600">-{job.credits}</td>
                      <td className="py-3 text-gray-500">{job.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Account Info */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Account</h2>
          <div className="flex items-center gap-4">
            {avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={avatar} alt={name} className="w-12 h-12 rounded-full border border-gray-200" />
            ) : (
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-lg">
                  {name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <div>
              <p className="font-medium text-gray-900">{name}</p>
              <p className="text-sm text-gray-500">{email}</p>
              <p className="mt-1 text-xs text-gray-400">
                Signed in with {user.id ? "Google" : "email"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
