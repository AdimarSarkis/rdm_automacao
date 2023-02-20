import './buttonsDownloads.css';
const ButtonsDownloads = ({
  url,
  name,
}) => {
  const downloadFileAtUrl = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  
  return(
    <button onClick={() => downloadFileAtUrl(url)}>
      {name}
    </button>
  );
}

export default ButtonsDownloads;