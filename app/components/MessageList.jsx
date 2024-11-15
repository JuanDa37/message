export default function MessageList({ messages }){
    return (
        <div>
            {
                messages?.map((message) => (
                    <div key={message.id} style={ { marginBottom: 20 + 'px' } }>
                        <span>{message.author.name}: {message.content}</span>
                    </div>
                ))
            }
        </div>
    );
}