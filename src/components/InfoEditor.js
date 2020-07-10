import React, { Component } from "react";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

class InfoEditor extends Component {
  state = {
    id: 0,
    text: "",
    path: ""
  };

  handleOpenModal = () => {
    this.setState({ modalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  handleAddElement = () => {
    const newState = this.state.INFO.concat;
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <>
        <FabButton onClick={this.handleOpenModal}>
          <Icon>edit_icon</Icon>
        </FabButton>

        <Modal open={this.state.modalOpen} onClose={this.handleCloseModal}>
          <MUCard>
            <CardContent>
              <Grid container spacing={3}>
                {this.state.INFO.map(el => {
                  return (
                    <>
                      <Grid item xs={5}>
                        <TextField label="Текст" fullWidth>
                          {el.text}
                        </TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField label="Путь к фото" fullWidth>
                          {el.path}
                        </TextField>
                      </Grid>
                      <Grid item xs={1}>
                        <AddElementButton>
                          <AddIcon />
                        </AddElementButton>
                        <AddElementButton>
                          <DeleteIcon />
                        </AddElementButton>
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </CardContent>
            <CardActions>
              <Button>Отмена</Button>
              <Button>OK</Button>
            </CardActions>
          </MUCard>
        </Modal>
      </>
    );
  }
}

export default InfoEditor;

const AddElementButton = styled(Fab)`
  height: 35px !important;
  width: 35px !important;
  margin: 3px !important;
`;
