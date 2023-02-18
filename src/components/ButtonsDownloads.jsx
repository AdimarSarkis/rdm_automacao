const ButtonsDownloads = ({
  url,
  name,
}) => {
  const downloadFileAtUrl = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return(
    <button className='border border-blue-400 p-5 my-10 mx-[600px]
      w-32 hover:scale-[1.05] hover:bg-blue-400 hover:text-white'
      onClick={() => downloadFileAtUrl(url)}>
      {name}
    </button>
  );
}

export default ButtonsDownloads;