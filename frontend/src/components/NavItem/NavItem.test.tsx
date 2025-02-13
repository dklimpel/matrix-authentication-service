// Copyright 2023 The Matrix.org Foundation C.I.C.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @vitest-environment happy-dom

import { create } from "react-test-renderer";
import { describe, expect, it } from "vitest";

import { WithLocation } from "../../test-utils/WithLocation";

import NavItem from "./NavItem";

describe("NavItem", () => {
  it("render an active <NavItem />", () => {
    const component = create(
      <WithLocation path="/">
        <NavItem route={{ type: "profile" }}>Active</NavItem>
      </WithLocation>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render an inactive <NavItem />", () => {
    const component = create(
      <WithLocation path="/account">
        <NavItem route={{ type: "sessions-overview" }}>Inactive</NavItem>
      </WithLocation>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a different route", () => {
    const component = create(
      <WithLocation path="/">
        <NavItem route={{ type: "sessions-overview" }}>Sessions</NavItem>
      </WithLocation>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
