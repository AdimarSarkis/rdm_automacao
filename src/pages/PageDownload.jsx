import ButtonsDownloads from '../components/ButtonsDownloads/index.jsx';
import { getStorage, ref } from "firebase/storage";
import "../backend/index"

function PageDownload() {
  const storage = getStorage();
  // Acesso Remoto
  const ANY_DESK_URL = "https://firebasestorage.googleapis.com/v0/b/rdmautomacao-26c5f.appspot.com/o/AnyDesk.rar?alt=media&token=51dfd07a-3711-42ff-9003-8f92f1330b82"
  const TEAM_VIEWER_URL = "https://firebasestorage.googleapis.com/v0/b/rdmautomacao-26c5f.appspot.com/o/TeamViewer_Setup(2).rar?alt=media&token=989fe6f6-118e-459d-96da-409f0c4fbdf0"
  const SHOW_MY_PC_URL = "https://firebasestorage.googleapis.com/v0/b/rdmautomacao-26c5f.appspot.com/o/ShowMyPC3161.rar?alt=media&token=1c45b329-adda-472c-baf3-6cde5fe786ea"
  
  // utilitarios
  const CISS_MONITORKEY_ATUALIZATION_URL = "https://firebasestorage.googleapis.com/v0/b/rdmautomacao-26c5f.appspot.com/o/CISSMonitorKey_2_19_Atualizador.rar?alt=media&token=4858948c-c69a-40ae-98be-c0dda150e891"
  const CISS_MONITORKEY_INSTALL_URL = "https://firebasestorage.googleapis.com/v0/b/rdmautomacao-26c5f.appspot.com/o/CISSMonitorKey_2_19_Instalador.rar?alt=media&token=e05a7d1d-a011-4402-8577-ee2b92aea585"
  const FILE_ZILLA_URL = "https://firebasestorage.googleapis.com/v0/b/rdmautomacao-26c5f.appspot.com/o/FileZilla_3_7_4_1_win32-setup.rar?alt=media&token=8e2c400a-7d85-4ee0-9fed-826b3fe62454"
  const WIN_SQL_URL = "https://firebasestorage.googleapis.com/v0/b/rdmautomacao-26c5f.appspot.com/o/WinSQL9.rar?alt=media&token=f59df71e-6a6c-41e8-91a4-ce22d85e8c03"

  // Tabelas
  const NCM_202017_URL = "https://firebasestorage.googleapis.com/v0/b/rdmautomacao-26c5f.appspot.com/o/NCM_202017.rar?alt=media&token=6afb15ee-1139-49e7-bfe9-5fc865cb6191"
  const TABELAS_UNI_MED_URL = "https://firebasestorage.googleapis.com/v0/b/rdmautomacao-26c5f.appspot.com/o/TABELA%20UNIDADE%20DE%20MEDIDAS.rar?alt=media&token=ab9bf96c-d4e1-4890-99d2-defa2004d7c9"

  return (
    <>
      <ButtonsDownloads url={ANY_DESK_URL} name="Any Desk"/>
      <ButtonsDownloads url={TEAM_VIEWER_URL} name="Team viewer"/>
      <ButtonsDownloads url={SHOW_MY_PC_URL} name="Show my PC"/>
      <ButtonsDownloads url={CISS_MONITORKEY_ATUALIZATION_URL} name="CISS Atualizador"/>
      <ButtonsDownloads url={CISS_MONITORKEY_INSTALL_URL} name="CISS INSTALADOR"/>
      <ButtonsDownloads url={FILE_ZILLA_URL} name="FileZilla"/>
      <ButtonsDownloads url={WIN_SQL_URL} name="WinSql"/>
      <ButtonsDownloads url={NCM_202017_URL} name="Tabela NCM"/>
    <ButtonsDownloads url={TABELAS_UNI_MED_URL} name="Tabela unidade de medidas"/>
    </>
  );
}

export default PageDownload;
