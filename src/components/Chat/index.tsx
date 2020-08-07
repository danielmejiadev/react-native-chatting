// Dependencies
import React from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { ImageBackground, ImageSourcePropType, Platform } from 'react-native';
import lodash from 'lodash';

// Dto
import { Channel } from '@src/client/resources/chat/channels/dto/channel';

// Hooks
import * as ChatHooks from '@src/hooks/messages';
import { useCurrentUser } from '@src/hooks/auth';
import { useConditionalEffect } from 'react-hooks-util';
import { Message } from '@src/client/resources/chat/message/dto/message';
import { MessageSendParams } from '@src/client/resources/chat/message/dto/messageSendParams';

export interface ChatProps {
  channel: Channel;
  backgroundSource: ImageSourcePropType;
}

function mapMessage(message: Message) {
  return {
    _id: message.id,
    text: message.message,
    createdAt: new Date(message.updatedAt),
    sent: true,
    received: true,
    user: {
      _id: message.senderId,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
  };
}

function mapSentMessage(senderId: number, message: MessageSendParams): IMessage {
  const { extension } = message;
  return {
    _id: message.id,
    text: message.body,
    createdAt: extension.dateSent && new Date(+extension.dateSent),
    user: {
      _id: senderId,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
  } as IMessage;
}

export function Chat(props: ChatProps): React.ReactElement {
  const { backgroundSource, channel } = props;
  const currentUser = useCurrentUser();
  const otherUser = channel.occupantsIds.find((id) => currentUser.id !== id) as number;

  const markAllAsRead = ChatHooks.useReadAllCallback();
  const markAsRead = ChatHooks.useReadCallback();
  const [history, loading] = ChatHooks.useMessagesHistory({ chatDialogId: channel.id, sortDesc: 'date_sent' });
  const [messages, setMessages] = React.useState<IMessage[]>([]);
  useConditionalEffect(() => {
    setMessages(history?.items.map(mapMessage));
    markAllAsRead(channel.id);
  }, [history?.items], !!history?.items);

  const [isTyping, setTyping] = React.useState(false);
  const [sendIsTyping, sendStopTyping] = ChatHooks.useTypingMessage((typing: boolean, userTyping: number, dialogId: string) => {
    console.log('useTypingMessage', Platform.OS, currentUser.id);
    setTyping(typing);
    console.log(
      '[ConnectyCube.chat.onMessageTypingListener] callback:',
      typing,
      userTyping,
      dialogId,
    );
  });

  const [text, setText] = React.useState('');
  const sendMessage = ChatHooks.useMessageSender({ channel, otherUser });
  const onMessageSent = React.useCallback((newMessages) => {
    const [messageToSend] = newMessages;
    messageToSend.pending = true;
    // eslint-disable-next-line no-underscore-dangle
    messageToSend._id = sendMessage(messageToSend.text);

    setMessages((prevMessages) => GiftedChat.append(prevMessages, [messageToSend]));
  }, [sendMessage]);

  const sendStopTypingIndicator = React.useCallback(lodash.debounce((oponentId: string | number) => sendStopTyping(oponentId), 800), []);
  const onInputTextChanged = React.useCallback((newText: string) => {
    sendStopTypingIndicator(otherUser);
    sendIsTyping(otherUser);
    setText(newText);
  }, [sendStopTypingIndicator, otherUser, sendIsTyping]);

  ChatHooks.useSentMessageListener((messageLost: MessageSendParams, messageSent: MessageSendParams) => {
    setMessages((prevMessages) => prevMessages.map((message) => {
      // eslint-disable-next-line no-underscore-dangle
      if (message._id === messageSent.id) {
        message.pending = false;
        message.sent = true;
      }

      return message;
    }));

    console.log('useSentMessageListener', Platform.OS);
    console.log(messageLost);
    console.log(messageSent);
  });

  ChatHooks.useDeliveredMessageListener((messageId: string, dialogId: string, userId: number) => {
    setMessages((prevMessages) => prevMessages.map((message) => {
      // eslint-disable-next-line no-underscore-dangle
      if (message._id === messageId) {
        message.received = true;
      }

      return message;
    }));

    console.log('useDeliveredMessageListener', Platform.OS);
    console.log(
      '[ConnectyCube.chat.onDeliveredStatusListener] callback:',
      messageId,
      dialogId,
      userId,
    );
  });

  ChatHooks.useReceivedMessageListener((senderId: number, messageReceived: MessageSendParams) => {
    console.log('useReceivedMessageListener', Platform.OS);
    console.log(senderId);
    console.log(messageReceived);
    markAsRead({ messageId: messageReceived.id, dialogId: channel.id, userId: senderId });
    setMessages((prevMessages) => GiftedChat.append(prevMessages, [mapSentMessage(senderId, messageReceived)]));
  });

  return (
    <ImageBackground source={backgroundSource} style={{ flex: 1 }}>
      <GiftedChat
        text={text}
        isTyping={isTyping}
        onInputTextChanged={onInputTextChanged}
        onSend={onMessageSent}
        messages={messages}
        loadEarlier
        isLoadingEarlier={loading}
        keyboardShouldPersistTaps="never"
        alwaysShowSend
        user={{ _id: currentUser.id, avatar: currentUser.avatar }}
      />
    </ImageBackground>
  );
}

/**
 * The default values for props.
 */
Chat.defaultProps = {
  backgroundSource: undefined,
};

export default Chat;
