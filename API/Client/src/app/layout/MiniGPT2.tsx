import '../style/styles.css';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as React from 'react';
import { useLocation, useOutlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SideMenu from '../components/widgets/navigation/SideMenu';
import { Grid, SemanticWIDTHS } from 'semantic-ui-react';
import { RootState } from '../../redux/store';
import { CommonThunkDispatch } from '../../redux/actions/commonActions';
import TextGeneratorActions from '../../redux/actions/textGeneratorActions';
import { connect } from 'react-redux';
import CenterSpinner from '../components/widgets/loading/CenterSpinner';
import StringUtil from '../../util/stringUtil';

interface StateProps {
  allVersions: string[]
  selectedVersion: string
}

interface DispatchProps {
  setSelectedVersion: (version: string) => void
  fetchAllVersion: () => Promise<void>
}

type Props = StateProps & DispatchProps

const mapStateToProps = (state: RootState) => ({ ...state.textGenerator })

const mapDispatchToProps = (dispatch: CommonThunkDispatch): DispatchProps => ({
  setSelectedVersion: (version: string) => dispatch(TextGeneratorActions.actionToSetSelectedVersion(version)),
  fetchAllVersion: () => dispatch(TextGeneratorActions.asyncActionToFetchAllVersions())
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MiniGPT2(props: Props) {

  const element = useOutlet();
  const { pathname } = useLocation();

  const { fetchAllVersion, allVersions, selectedVersion, setSelectedVersion } = props

  useEffect(() => {

    if (allVersions.length === 0) {
      fetchAllVersion()
    }
    else if (StringUtil.isNullOrEmpty(selectedVersion)) {
      const lastVersion = allVersions[allVersions.length - 1]
      setSelectedVersion(lastVersion)
    }
  }, [fetchAllVersion, allVersions, selectedVersion, setSelectedVersion])

  let backgroundStyle = {
    height: '100vh'
  }

  // Semantic UI Grid can only have at most 16 columns so the max width is 16
  const maxGridWidth = 16
  const sideMenuWidth = 3
  const pageWidth = maxGridWidth - sideMenuWidth

  const gridColStyle = {
    padding: '0',
    height: '100%'
  }

  const spinnerWrapperStyle = {
    height: '100vh',
    width: '100%'
  }

  const appIsLoading = props.allVersions.length === 0 || StringUtil.isNullOrEmpty(props.selectedVersion)

  // More details on how to make framer-motion exit animation work with new react-router-dom outlet:
  // https://stackoverflow.com/questions/75121981/react-framer-motion-animatepresence-exit-animation-does-not-work
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={backgroundStyle}>
        <Grid style={{margin: '0'}}>
          <Grid.Column style={gridColStyle} width={sideMenuWidth as SemanticWIDTHS}>
            <SideMenu />
          </Grid.Column>
          <Grid.Column style={gridColStyle} width={pageWidth as SemanticWIDTHS}>
            <AnimatePresence mode='wait'>
              {appIsLoading && (
                <div style={spinnerWrapperStyle}>
                  <CenterSpinner>Loading application...</CenterSpinner>
                </div>
              )}
              {!appIsLoading && (
                <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
              )}
              {(!appIsLoading && element) && React.cloneElement(element, { key: pathname })}
            </AnimatePresence>
          </Grid.Column>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniGPT2)