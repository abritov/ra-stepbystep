import * as React from "react";
import {
  Admin,
  Resource,
  List,
  Datagrid,
  TextField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
} from "react-admin";
import fakeDataProvider from "ra-data-fakerest";

const dataProvider = fakeDataProvider({
  users: [
    { id: 0, name: "root", roles: [1, 2, 3] },
    { id: 1, name: "peter", roles: [1, 2] },
  ],
  roles: [
    { id: 1, name: "DEVELOPER" },
    { id: 2, name: "MODERATOR" },
    { id: 3, name: "ADMIN" },
  ],
});

const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceArrayField source="roles" reference="roles">
        <SingleFieldList linkType={false}>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
    </Datagrid>
  </List>
);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
