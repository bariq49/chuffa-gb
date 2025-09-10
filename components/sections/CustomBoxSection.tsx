export default function CustomBoxSection({ title, content }: { title: string; content: string }) {
    return (
        <div className="text-center py-8">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
}