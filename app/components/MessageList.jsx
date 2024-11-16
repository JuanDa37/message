export default function MessageList({ messages }){
    return (
        <div>
            {
                messages?.map((message) => (
                    <div key={message.id} style={ { marginBottom: 20 + 'px' } }>
                        <span><span className="fw-bold">{message.author.name}: </span> {message.content}</span>
                    </div>
                ))
            }
        </div>
    );
}