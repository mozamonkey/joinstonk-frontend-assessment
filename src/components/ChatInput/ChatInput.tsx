"use client";
import React, { CSSProperties, FC, memo } from "react";

import {
  Avatar,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  MenuItem,
} from "@mui/material";
import { Mention, MentionsInput } from "react-mentions";
import SendIcon from "@mui/icons-material/Send";
import classNames from "./ChatInput.module.css";
import zIndex from "@mui/material/styles/zIndex";
import defaultStyle from "./defaultStyle";
export type ChatInputProps = {
  dataTestId?: string;
  inputRef?: any;
  onBlur?: () => void;
  onFocus?: () => void;
  multiline?: boolean;
  appendSpaceOnAdd?: boolean;
  isLoading?: boolean;
  onAdd?: () => void;
  markup?: any;
  renderSuggestionItem?: any;
  trigger?: any;
  suggestions?: any;
  placeholder?: string;
  helperText?: any;
  allowSpaceInQuery?: boolean;
  allowSuggestionsAboveCursor?: boolean;
  forceSuggestionsAboveCursor?: boolean;
  autoFocus?: boolean;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  displayTransform?: any;
  userSuggestions?: any;
  commandSuggestions?: any;
  emojiSuggestions?: any;
  inputClassName?: string;
  mentionStyle?: CSSProperties;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
  value?: string;
};

const renderUserSuggestions = () => {
  return (suggestion: any) => {
    const itemContent = suggestion.display;
    return (
      <MenuItem component="div" style={{ height: "100%", width: "100%" }}>
        <Avatar
          variant="rounded"
          sx={{ marginRight: 2, width: 24, height: 24 }}
          src={suggestion.avatar}
        />{" "}
        {itemContent}
      </MenuItem>
    );
  };
};

const renderCommandSuggestions = () => {
  return (suggestion: any) => {
    return (
      <MenuItem component="div" style={{ height: "100%", width: "100%" }}>
        {suggestion.display} - {suggestion.description}
      </MenuItem>
    );
  };
};

const emojiRender = () => {
  return (suggestion: any) => {
    return (
      <MenuItem component="div" style={{ height: "100%", width: "100%" }}>
        <Avatar
          variant="rounded"
          sx={{ marginRight: 2, width: 24, height: 24 }}
        >
          {suggestion.id}
        </Avatar>
        {suggestion.shortname}
      </MenuItem>
    );
  };
};

const ChatInput = ({
  dataTestId = "test-id-mentions-input",
  onChange,
  allowSpaceInQuery,
  allowSuggestionsAboveCursor,
  forceSuggestionsAboveCursor,
  autoFocus,
  inputRef,
  disabled,
  onBlur,
  multiline,
  value,
  appendSpaceOnAdd,
  displayTransform,
  isLoading,
  markup,
  onAdd,
  renderSuggestionItem,
  trigger,
  mentionStyle,
  userSuggestions,
  emojiSuggestions,
  commandSuggestions,
  onFocus,
  placeholder,
  onSubmit,
}: ChatInputProps) => {
  const handleChange = (event: { target: { value: string } }): void => {
    onChange?.(event.target.value);
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        // backgroundColor: "rgba(34, 37, 41, 255)",
        border: "1px solid silver",
        borderRadius: "4px",
      }}
    >
      <MentionsInput
        allowSpaceInQuery={allowSpaceInQuery}
        allowSuggestionsAboveCursor={allowSuggestionsAboveCursor}
        autoFocus={autoFocus}
        data-testid={dataTestId}
        forceSuggestionsAboveCursor={forceSuggestionsAboveCursor}
        classNames={classNames}
        inputRef={inputRef}
        disabled={disabled}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleChange}
        singleLine={multiline}
        value={value}
        placeholder={placeholder}
        spellCheck={false}
      >
        <Mention
          appendSpaceOnAdd={appendSpaceOnAdd}
          displayTransform={displayTransform}
          isLoading={isLoading}
          className={classNames.mentions__mention}
          markup={markup}
          onAdd={onAdd}
          renderSuggestion={renderUserSuggestions()}
          trigger={"@"}
          data={userSuggestions}
        />
        <Mention
          trigger={":"}
          appendSpaceOnAdd={appendSpaceOnAdd}
          className={classNames.mentions__mention}
          isLoading={isLoading}
          markup={markup}
          onAdd={onAdd}
          renderSuggestion={emojiRender()}
          data={emojiSuggestions}
        />
        <Mention
          trigger={"/"}
          appendSpaceOnAdd={appendSpaceOnAdd}
          className={"command"}
          isLoading={isLoading}
          markup={markup}
          onAdd={onAdd}
          renderSuggestion={renderCommandSuggestions()}
          data={commandSuggestions}
          style={{ ...defaultStyle }}
        />
      </MentionsInput>

      <Grid container item justifyContent={"flex-end"} p={1}>
        <Grid item>
          <Button onClick={onSubmit} variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChatInput;
