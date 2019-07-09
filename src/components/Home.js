import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { addToCart } from "./actions/cartActions";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddShopping from "@material-ui/icons/AddShoppingCart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";

import FoodOptions from "./FoodOptions";

const styles = theme => ({
  card: {
    minWidth: 350,
    maxWidth: 350,
    margin: 8
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  header: {
    backgroundColor: theme.palette.primary.main
  },
  title: {
    color: theme.palette.primary.standingText
  },
  conTitle: {
    marginTop: ".75rem"
  },
  container: {
    flexGrow: 1
  }
});

class Home extends Component {
  // On Click Functionalities
  handleAddToClick = id => {
    this.props.addToCart(id);
  };

  state = { expanded: false };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, itemOptions } = this.props;
    // Card Rendering for each Item & Option found here
    let itemList = this.props.items.map(item => {
      const optionList = itemOptions[0][item["item_id"]];

      return (
        // Card can be broken out into its own component in future
        <Card className={classes.card}>
          {/* {options.map(thing => console.log(thing[item["item_id"]]))} */}

          <CardHeader
            className={classes.header}
            classes={{ title: classes.title }}
            title={item.name}
          />
          <CardMedia
            className={classes.media}
            image={item.picture_url}
            title={item.name}
          />
          <CardContent>
            <Typography component="p">
              {/* Hard Coded currency value can be scaled with Currency Library in future */}
              <b>
                Price: ${(item.price.base_unit / Math.pow(10, 2)).toFixed(2)}
              </b>
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to cart">
              <AddShopping
                onClick={() => {
                  this.handleAddToClick(item.item_id);
                }}
              />
            </IconButton>
            {/* Card Expansion Feature here */}
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                <b>Item Description:</b>
              </Typography>
              <Typography paragraph>{item.description}</Typography>
              {/* FoodOptions component used here */}
              <FoodOptions options={optionList} />
            </CardContent>
          </Collapse>
        </Card>
      );
    });

    return (
      <div container className={classes.container}>
        <Typography
          className={classes.conTitle}
          variant="h5"
          align="center"
          gutterBottom
        >
          Available Items
        </Typography>
        <Grid container className={classes.box} spacing={16}>
          <Grid item xs={12}>
            <Grid
              container
              className={classes.foods}
              justify="center"
              spacing={16}
            >
              {itemList}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    itemOptions: state.options,
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
