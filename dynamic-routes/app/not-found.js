export default function Custom404() {
    return (
        <div className="h-screen flex items-center justify-center flex-col">
            <h1 className="text-4xl font-bold text-center flex items-center justify-center hover:text-red-400">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600 mt-4">The page you are looking for does not exist.</p>
        </div>
    )
}