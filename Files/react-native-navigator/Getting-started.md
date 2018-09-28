# Getting started

React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives.

> 语法分析：第一句是典型的`主系表结构`，其中`born from the React Native community's need...`是表语，它与系动词`is`一起构成谓语。`need for obj` 是一个名词短语，表示`所需之物`，这里无论是`need`还是`need for ...`以及所接对象都是名词性质。
这里的`yet`表示汉语`又`。

Before you commit to using React Navigation for your project, you might want to read the anti-pitch — it will help you to understand the tradeoffs that we have chosen along with the areas where we consider the library to be deficient currently.

> 语法分析：`Before...` 是一个时间状语从句，`commit to doing` 表示确定做某事。`...the tradeoffs that we have chosen along with the areas where...`。在这里`that...`是`tradeoffs`这个名词的定语从句。`the tradeoffs that we have chosen`也就是我们所选择的利弊权衡。`to understand `在这里作定语（对you进行说明）。

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned |  |
| col 2 is      | centered      |    |
| zebra stripes | are neat      |     |


## What to expect

If you're already familiar with React Native then you'll be able to get moving with React Navigation quickly! If not, you may want to read sections 1 to 4 (inclusive) of React Native Express first, then come back here when you're done.

What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation.

## Installation

```bash
yarn add react-navigation
```

## Hello React Navigation

In a web browser, you can link to different pages using an anchor (<a>) tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story.

> 语法分析： using an anchor a tag 是`动词ing作后置定语`，对pages进行详细说明。

React Navigation's stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state - your app pushes and pops items from the navigation stack as users interact with it, and this results in the user seeing different screens. A key difference between how this works in a web browser and in React Navigation is that React Navigation's stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack.

All we need to get started using React Navigation is a function called createStackNavigator.

#### Creating a stack navigator

createStackNavigator is a function that returns a React component. It takes a route configuration object and, optionally, an options object (we omit this below, for now). Because the createStackNavigator function returns a React component, we can export it directly from App.js to be used as our App's root component.

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});
```

If you run this code, you will see a screen with an empty navigation bar and a grey content area containing your HomeScreen component. The styles you see for the navigation bar and the content area are the default configuration for a stack navigator, we'll learn how to configure those later.

The casing of the route name doesn't matter -- you can use lowercase home or capitalized Home, it's up to you. We prefer capitalizing our route names.

The only required configuration for a route is the screen component. You can read more about the other options available in the StackNavigator reference.

In React Native, the component exported from App.js is the entry point (or root component) for your app -- it is the component from which every other component descends. It's often useful to have more control over the component at the root of your app than you would get from exporting the result of createStackNavigator, so let's export a component that just renders our RootStack stack navigator.

```javascript
const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
```

### Route configuration shorthand

Given that the only route configuration we have for Home is the screen component, we don't need to use the { screen: HomeScreen } configuration format, we can use the screen component directly.

```javascript
const RootStack = createStackNavigator({
  Home: HomeScreen
});
```

### Adding a second route
The <RootStack /> component doesn't accept any props -- all configuration is specified in the options parameter to the createStackNavigator function. We left the options blank, so it just uses the default configuration. To see an example of using the options object, we will add a second screen to the stack navigator.

```javascript
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
```

Now our stack has two routes, a Home route and a Details route. The Home route corresponds to the HomeScreen component, and the Details route corresponds to the DetailsScreen component. The initial route for the stack is the Home route. The natural question at this point is: "how do I go from the Home route to the Details route?". That is covered in the next section.

## Moving between screens

In the previous section, "Hello React Navigation", we defined a stack navigator with two routes (Home and Details), but we didn't learn how to let a user navigate from Home to Details (although we did learn how to change the initial route in our code, but forcing our users to clone our repository and change the route in our code in order to see another screen is arguably among the worst user experiences one could imagine).

If this was a web browser, we'd be able to write something like this:

```html
<a href="details.html">Go to Details</a>
``` 

Another way to write this would be:

```javascript
<a onClick={() => { document.location.href = "details.html"; }}>Go to Details</a>
```

We'll do something similar to the latter, but rather than use a document global we'll use the navigation prop that is passed in our screen components.

### Navigating to a new screen

```javascript
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

```

Let's break this down:

this.props.navigation: the navigation prop is passed in to every screen component (definition) in stack navigator (more about this later in "The navigation prop in depth").
navigate('Details'): we call the navigate function (on the navigation prop — naming is hard!) with the name of the route that we'd like to move the user to.
If we call this.props.navigation.navigate with a route name that we haven't defined on a stack navigator, nothing will happen. Said another way, we can only navigate to routes that have been defined on our stack navigator — we cannot navigate to an arbitrary component.

So we now have a stack with two routes: 1) the Home route 2) the Details route. What would happen if we navigated to the Details route again, from the Details screen?

### Navigate to a route multiple times

```javascript
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
```

If you run this code, you'll notice that when you tap "Go to Details... again" that it doesn't do anything! This is because we are already on the Details route. The navigate function roughly means "go to this screen", and if you are already on that screen then it makes sense that it would do nothing.

Let's suppose that we actually want to add another details screen. This is pretty common in cases where you pass in some unique data to each route (more on that later when we talk about params!). To do this, we can change navigate to push. This allows us to express the intent to add another route regardless of the existing navigation history.

```javascript
<Button
  title="Go to Details... again"
  onPress={() => this.props.navigation.push('Details')}
/>
}
```

Each time you call push we add a new route to the navigation stack. When you call navigate it first tries to find an existing route with that name, and only pushes a new route if there isn't yet one on the stack.

Going back
The header provided by stack navigator will automatically include a back button when it is possible to go back from the active screen (if there is only one screen in the navigation stack, there is nothing that you can go back to, and so there is no back button).

Sometimes you'll want to be able to programmatically trigger this behavior, and for that you can use this.props.navigation.goBack();

```javascript
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
```

On Android, React Navigation hooks in to the hardware back button and fires the goBack() function for you when the user presses it, so it behaves as the user would expect.

Another common requirement is to be able to go back multiple screens -- for example, if you are several screens deep in a stack and want to dismiss all of them to go back to the first screen. In this case, we know that we want to go back to Home so we can use navigate('Home') (not push! try that out and see the difference). Another alternative would be navigation.popToTop(), which goes back to the first screen in the stack.

### Summary

this.props.navigation.navigate('RouteName') pushes a new route to the stack navigator if it's not already in the stack, otherwise it jumps to that screen.

We can call this.props.navigation.push('RouteName') as many times as we like and it will continue pushing routes.

The header bar will automatically show a back button, but you can programmatically go back by calling this.props.navigation.goBack(). On Android, the hardware back button just works as expected.
You can go back to an existing screen in the stack with this.props.navigation.navigate('RouteName'), and you can go back to the first screen in the stack with this.props.navigation.popToTop().
The navigation prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route).

## Passing parameters to routes

Remember when I said "more on that later when we talk about params!"? Well, the time has come.

Now that we know how to create a stack navigator with some routes and navigate between those routes, let's look at how we can pass data to routes when we navigate to them.

There are two pieces to this:

1. Pass params to a route by putting them in an object as a second parameter to the navigation.navigate function: this.props.navigation.navigate('RouteName', { /* params go here */ })

2. Read the params in your screen component: this.props.navigation.getParam(paramName, defaultValue).


```javascript
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
```

You can also directly access the params object with this.props.navigation.state.params. This may be null if no params were supplied, and so it's usually easier to just use getParam so you don't have to deal with that case.

If you want to access the params directly through props (eg. this.props.itemId) rather than this.props.navigation.getParam, you may use a community-developed react-navigation-props-mapper package.

### Summary
navigate and push accept an optional second argument to let you pass parameters to the route you are navigating to. For example: this.props.navigation.navigate('RouteName', {paramName: 'value'}).
You can read the params through this.props.navigation.getParam
As an alternative to getParam, you may use this.props.navigation.state.params. It is null if no parameters are specified.
