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

import type { Meta, StoryObj } from "@storybook/react";
import { PropsWithChildren } from "react";

import { Route } from "../../routing/routes";
import { WithLocation } from "../../test-utils/WithLocation";

import SessionHeader from "./SessionHeader";

type Props = PropsWithChildren<{
  backToRoute: Route;
}>;

const Template: React.FC<Props> = ({ backToRoute, children }) => {
  return (
    <WithLocation>
      <SessionHeader backToRoute={backToRoute}>{children}</SessionHeader>
    </WithLocation>
  );
};

const meta = {
  title: "UI/Session/Session Detail/Header",
  component: Template,
  tags: ["autodocs"],
} satisfies Meta<typeof Template>;

export default meta;
type Story = StoryObj<typeof Template>;

export const Basic: Story = {
  args: {
    backToRoute: { type: "sessions-overview" },
    children: <>Chrome on iOS</>,
  },
};
