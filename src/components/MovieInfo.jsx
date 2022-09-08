import { BsFileExcel } from "react-icons/bs";
import { Box } from 'components/Box';
import { ImageBox } from "components/ImageBox"

const width = 342;
const colSize = `${width}px 1fr`;

export const MovieInfo = ({ title, overview, score, poster_path, genresString }) =>
    <Box display="grid" gridTemplateColumns={colSize} borderBottom={"1px solid black"}>
    <ImageBox poster_path={poster_path} width={width}><BsFileExcel size={width} /></ImageBox>
      <Box display="flex" flexDirection="column" justifyContent="flex-start" p={4} gridGap={10}>
          <h2>{title}</h2>
          <p>User score: {score}%</p>
          <p><b>Overview:</b></p>
          {overview}
          <p><b>Genres:</b></p>
          {genresString}
      </Box>
    </Box>