import './IFrame.css';

const IFrame = ({ baseUrl, appToken, token }) => {
  if (!baseUrl || !appToken || !token) return null;

  let finalUrl = baseUrl.trim();

  if (!(baseUrl.charAt(baseUrl.length - 1) === '/')) {
    finalUrl += '/';
  }

  finalUrl += `application/${appToken.trim()}/occurrence-info/${token.trim()}`;

  return (
    <iframe
      className='iframe'
      src={finalUrl}
      title='Instabug Dashboard'
    >
    </iframe>
  );
};

export default IFrame;
