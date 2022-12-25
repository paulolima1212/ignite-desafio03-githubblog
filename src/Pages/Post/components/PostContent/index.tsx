import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { PostContentContainer } from './styles';
import { Prism as SyntaxHighLighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export function PostContent({ postContent }: { postContent: string }) {
  return (
    <PostContentContainer>
      <ReactMarkdown
        children={postContent}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighLighter
                children={String(children).replace(/\n$/, '')}
                style={dracula as any}
                language={match[1]}
                PreTag={'div'}
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </PostContentContainer>
  );
}
