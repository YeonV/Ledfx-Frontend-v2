/* eslint-disable @typescript-eslint/indent */
import { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
  Grid,
  Chip,
} from '@mui/material';
import { PlaylistAdd, Edit } from '@mui/icons-material';
import useStore from '../../store/useStore';
import Popover from '../../components/Popover/Popover';
import NoYet from '../../components/NoYet';
import BladeIcon from '../../components/Icons/BladeIcon/BladeIcon';
// import ScenesTable from './ScenesTable';
import ScenesRecent from './ScenesRecent';
import ScenesMostUsed from './ScenesMostUsed';
import ScenesPlaylist from './ScenesPlaylist';

const useStyles = makeStyles({
  root: {
    width: 'min(92vw, 345px)',
  },
  sceneTitle: {
    fontSize: '1.5rem',
  },
  '@media (max-width: 580px)': {
    root: {
      width: '95vw',
    },
    sceneTitle: {
      fontSize: '1rem',
    },
  },
  media: {
    height: 140,
  },
  iconMedia: {
    height: 140,
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    fontSize: 100,
    '& > span:before': {
      position: 'relative',
    },
  },
});

const Scenes = () => {
  const classes = useStyles();
  const getScenes = useStore((state) => state.getScenes);
  const scenes = useStore((state) => state.scenes);
  const features = useStore((state) => state.features);
  const activateScene = useStore((state) => state.activateScene);
  const sceneActiveTags = useStore((state) => state.ui.sceneActiveTags);
  const addScene2PL = useStore((state) => state.addScene2PL);
  const toggletSceneActiveTag = useStore(
    (state) => state.ui.toggletSceneActiveTag
  );
  const captivateScene = useStore((state) => state.captivateScene);
  const deleteScene = useStore((state) => state.deleteScene);
  const setDialogOpenAddScene = useStore(
    (state) => state.setDialogOpenAddScene
  );
  const handleActivateScene = (e: string) => {
    activateScene(e);
    if (scenes[e]?.scene_puturl && scenes[e]?.scene_payload)
      captivateScene(scenes[e]?.scene_puturl, scenes[e]?.scene_payload);
  };

  const handleDeleteScene = (e: any) => {
    deleteScene(e).then(() => {
      getScenes();
    });
  };

  const sceneImage = (iconName: string) =>
    iconName && iconName.startsWith('image:') ? (
      <CardMedia
        className={classes.media}
        image={iconName.split('image:')[1]}
        title="Contemplative Reptile"
      />
    ) : (
      <BladeIcon scene className={classes.iconMedia} name={iconName} />
    );

  useEffect(() => {
    getScenes();
  }, [getScenes]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {scenes && Object.keys(scenes).length && features.scenetables && (
          <Grid
            container
            spacing={[0, 0, 2, 2, 2]}
            justifyContent="center"
            m={['0 auto', '0 auto', '0.5rem', '0.5rem', '0.5rem']}
            sx={{ maxWidth: '100%' }}
          >
            <Grid
              item
              mt={['0.5rem', '0.5rem', 0, 0, 0]}
              mb={['5rem', '5rem', 0, 0, 0]}
              p="8px !important"
              width={450}
            >
              <ScenesRecent
                scenes={scenes}
                activateScene={handleActivateScene}
                title="Recent Scenes"
              />
            </Grid>
            <Grid
              item
              mt={['0.5rem', '0.5rem', 0, 0, 0]}
              mb={['5rem', '5rem', 0, 0, 0]}
              p="8px !important"
              width={450}
            >
              <ScenesMostUsed
                scenes={scenes}
                activateScene={handleActivateScene}
                title="Most Used Scenes"
              />
            </Grid>
            <Grid
              item
              mt={['0.5rem', '0.5rem', 0, 0, 0]}
              mb={['5rem', '5rem', 0, 0, 0]}
              p="8px !important"
              width={450}
            >
              <ScenesPlaylist
                scenes={scenes}
                activateScene={handleActivateScene}
                title="Scene-Playlist"
              />
            </Grid>
          </Grid>
        )}
        {scenes && Object.keys(scenes).length && features.scenechips && (
          <div>
            {Object.keys(scenes)
              .flatMap((s) => scenes[s].scene_tags?.split(','))
              .map((item: string) => item.trim())
              .filter((v, i, a) => a.indexOf(v) === i && v)
              .map((t: string) => {
                return (
                  <Chip
                    variant={
                      sceneActiveTags.includes(t) ? 'filled' : 'outlined'
                    }
                    sx={{
                      ml: 1,
                      mt: 1,
                      mr: 1,
                      cursor: sceneActiveTags.includes(t)
                        ? 'zoom-out'
                        : 'zoom-in',
                    }}
                    key={t}
                    label={t}
                    onClick={() => toggletSceneActiveTag(t)}
                  />
                );
              })}
          </div>
        )}
      </div>
      <Grid
        container
        spacing={[0, 0, 2, 2, 2]}
        justifyContent="center"
        m={['0 auto', '0 auto', '0.5rem', '0.5rem', '0.5rem']}
        sx={{ maxWidth: '100%' }}
      >
        {scenes && Object.keys(scenes).length ? (
          (sceneActiveTags.length
            ? Object.keys(scenes).filter((sc) =>
                scenes[sc].scene_tags
                  ?.split(',')
                  .some((sce: string) => sceneActiveTags.includes(sce))
              )
            : Object.keys(scenes)
          ).map((s, i) => (
            <Grid
              item
              key={i}
              mt={['0.5rem', '0.5rem', 0, 0, 0]}
              p="8px !important"
            >
              <Card className={classes.root}>
                <CardActionArea
                  style={{ background: '#090909' }}
                  onClick={() => handleActivateScene(s)}
                >
                  {sceneImage(scenes[s].scene_image || 'Wallpaper')}
                  <div style={{ position: 'absolute', top: 0, right: 0 }}>
                    {scenes[s].scene_tags?.split(',').map(
                      (t: string) =>
                        t.length &&
                        features.scenechips && (
                          <Chip
                            variant="filled"
                            label={t}
                            key={t}
                            sx={{
                              cursor: 'pointer',
                              backgroundColor: '#333',
                              border: '1px solid #999',
                            }}
                          />
                        )
                    )}
                  </div>
                </CardActionArea>
                <CardActions
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Typography
                    className={classes.sceneTitle}
                    variant="h5"
                    component="h2"
                  >
                    {scenes[s].name || s}
                  </Typography>
                  <div>
                    <Popover
                      onConfirm={() => handleDeleteScene(s)}
                      variant="outlined"
                      color="inherit"
                      style={{ marginLeft: '0.5rem' }}
                    />
                    <Button
                      onClick={() =>
                        setDialogOpenAddScene(false, true, s, scenes[s])
                      }
                      variant="outlined"
                      color="inherit"
                      size="small"
                    >
                      <Edit />
                    </Button>
                    <Button
                      onClick={() => addScene2PL(s)}
                      variant="outlined"
                      color="inherit"
                      size="small"
                    >
                      <PlaylistAdd />
                    </Button>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <NoYet type="Scene" />
        )}
      </Grid>

      {/* {scenes && Object.keys(scenes).length && <ScenesTable scenes={scenes} />} */}
    </>
  );
};

export default Scenes;
