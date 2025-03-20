import ReactMarkdown from 'react-markdown';
import MarkDownStyle from './MarkDown';

interface MarkdownContainerInterface {
  content: string;
}

const MarkdownContainer = ({ content }: MarkdownContainerInterface ) => {
  return (
    <MarkDownStyle>
      <ReactMarkdown>{content}</ReactMarkdown>
    </MarkDownStyle>
  );
};

export default MarkdownContainer;