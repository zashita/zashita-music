import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {ITrack} from "@/interfaces/track";
import TrackListItem from "@/components/TrackListItem";
export interface ITrackListProps {
    tracks: ITrack[];
}
const TrackList = (props: ITrackListProps) => {

    return (
        <>
            <Typography
                variant={'h3'}
                color={'#fff'}
                mb={'50px'}
            >
                Tracks, uploaded by users
            </Typography>
            {props.tracks.map((track, index)=>{
                return(
                    <TrackListItem track={track} active={false}/>
                )
            })}
        </>

    );
};

export default TrackList;