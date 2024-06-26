# Project Manifesto: Atomic Design + Composition Pattern

In this project, we adopted an atomic design approach to the organization and composition of components in our applications. Here is our manifesto, explaining the principles and practices we follow:

# Directory Organization: 
We created a directory structure according to the atomic design, which includes the "components" directory with its subdirectories: "atoms", "molecules" and "organisms".
This organization allows us to categorize and group our components based on their complexity and reusability.

# Definition of Atoms:
Atoms are components, often implemented only with styled components.
They can be React components, such as inputs or icons.
* **IT IS an atom:** any component that does not have design variation in its design system and its composition depends only on internal state control, for example: an input that displays the error icon in case of an error completed by the user.
* **IT IS NOT an atom:** any component whose composition is optional, for example: a button, which displays only text, or only an icon, according to the page design.

# Definition of Molecules:
Molecules are components that can be created from atoms or elements themselves, for example: buttons (which includes a root element, optionally accompanied by an icon and/or text for its composition), or a header (which includes a root element, a text and optionally icons on the right and left, or both).
* **IT IS a molecule:** any component that does have design variations in its design system and, in order to be used in a page, must be composed according to the design/layout definition.
* **IT IS NOT a molecule:** any component that cannot be composed and does not have design variation in its design system.


# Definition of Organisms:
Organisms are the most used compositions of molecules. Every molecule is eligible to become an organism, as soon as a molecule is composed and applied in the same way more than once. For example, the "header" molecule composed only of text is used on several pages, so it is a simple example of an organism, like Header.Default. The "header" molecule, composed of text and icon on the right, is used on pages, sidepanels, widgets and other places, so it also becomes an organism, like Header.WithIcon.
* **IT IS a organism:** any molecule that has been constructed with the same composition more than once, can be a default organism or a variation of it

# Templates:
We define styles in our templates for the header, main, aside and footer elements. On our pages, we select the desired template and apply the organisms semantically, this way the styling present in the template for header, main, aside and footer will be applied to the components. Styling only covers what refers to the positioning of these 3 elements in the body of the screen, for example, applying position: sticky top: 0 to the header, and bottom: 0 to the footer, and flex-grow: 1 to the main, thus ensuring that each element uses its due space. There are templates that do the same using grid instead of flex, the application will be according to preference.

# Pages / Usage:
Pages can implement organisms directly, or compose specific components using individual molecules, as well as atoms. If we see that a molecule is frequently used in different locations with the same composition, we can promote it to a variation of the organism for better code reuse.

# Schema 
![draw](https://github.com/fcms14/react-components/assets/116290726/0308afc3-5ab9-4e77-b75f-5bc58e7ff1df)

With these principles, we seek to create a flexible, modular and easy-to-maintain component architecture, allowing rapid iteration in the development of our applications.

This is our manifesto, guiding us on our development journey based on atomic design and component composition.


# State Management:
### Local State: useState 
To manage variable state in the context of the component or page to which it is applied. 
**Avoid sharing between components.**
### State Sharing: useContext
To manage variable state in components within a hierarchy.
We also use the Formik library for form management, which provides context-based state management, which allows the sharing of variables and functions between components within a hierarchy.
### Global State: Redux
To manage state of variables in the global context of the application. Any variable that needs to have its state shared by components that are not related in the same hierarchy, and that can have its state changed by other components.
* Redux Usage
> * Create a folder with the name of the entity that will be managed by Redux in the "features" directory.
> * Create two files, [entity]Dispatcher.ts and [entity]Slice.ts
> * In the ...Slice file, define the name, initial state, and reducers (data state management functions) and export these functions.
> * In the ...Dispatcher file, implement the functions by assigning the Slice functions to store.dispatch, and forwarding the payload.
> * Finally, in the store/index.ts file add the Reducer generated by Slice to the store settings.

### Http State: useQuery
To manage state of data received via API, define cache time, reuse data with state sharing by global context and update simultaneously in all components that use the same data.

# Form Management:
We use Formik to manage forms, together with Yup to validate the data filled in by the user. And mutation(useQuery) to post form to API.

# Install:
npm install / yarn

# Build:
npm run build / yarn build

# Run:
npm run dev / yarn dev
