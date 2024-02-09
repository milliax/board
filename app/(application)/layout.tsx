export default function HomeLayout({
    tasks,
    children
}: {
    tasks: React.ReactNode,
    children: React.ReactNode
}) {
    return (
        <main className="grid grid-cols-10">
            <div className="col-span-2">
                {tasks}
            </div>
            <div className="col-span-8">
                {children}
            </div>
        </main>
    );
}
