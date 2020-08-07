// Dependencies
import React from 'react';
import chatClient from '@src/client';

// Hooks
import { useFetch } from 'react-hooks-util';
import { MessageListParams } from '@src/client/resources/chat/message/dto/messageListParams';
import { MessageList } from '@src/client/resources/chat/message/dto/messageList';
import { Channel, ChannelTypes } from '@src/client/resources/chat/channels/dto/channel';
import { MessageType } from '@src/client/resources/chat/message/dto/messageSendParams';

/**
 * Gets the channels for current user in session.
 * @returns The response with channels.
 */
export function useMessagesHistory(
  filters: MessageListParams,
): [MessageList, boolean, unknown, () => void] {
  const listMessages = React.useCallback(() => chatClient.chat.message.list(filters), [filters]);
  return useFetch(listMessages, [], undefined);
}

export function useMessageSender({ channel, otherUser }: any): (message: string) => string {
  return React.useCallback((message: string) => {
    const messageToSend = {
      type: channel.type === ChannelTypes.PRIVATE ? MessageType.CHAT : MessageType.GROUP_CHAT,
      body: message,
      extension: {
        saveToHistory: 1,
        dialogId: channel.id,
      },
      markable: 1,
    };

    return chatClient.chat.message.sendMessage(otherUser, messageToSend);
  }, [channel, otherUser]);
}

export function useReadCallback(): (params: any) => void {
  return React.useCallback((params) => chatClient.chat.message.sendReadStatus(params), []);
}

export function useReadAllCallback(): (channelId: string) => void {
  return React.useCallback((channelId) => chatClient.chat.message.sendReadAll(channelId), []);
}


export function useReceivedMessageListener(callback: any) {
  React.useEffect(() => {
    chatClient.chat.message.addReceivedMessageListener(callback);
    return () => chatClient.chat.message.addReceivedMessageListener(null);
  }, []);
}

export function useSentMessageListener(callback: any) {
  React.useEffect(() => {
    chatClient.chat.message.addSentMessageListener(callback);
  }, []);
}

export function useReadMessageListener(callback: any) {
  React.useEffect(() => {
    chatClient.chat.message.addReadMessageListener(callback);
  }, []);
}

export function useDeliveredMessageListener(callback: any) {
  React.useEffect(() => {
    chatClient.chat.message.addDeliveryMessageListener(callback);
  }, []);
}

export function useTypingMessage(callback: any) {
  React.useEffect(() => {
    chatClient.chat.message.addTypingMessageLister(callback);
  }, []);

  return [chatClient.chat.message.sendIsTypingStatus, chatClient.chat.message.sendIsStopTypingStatus];
}
