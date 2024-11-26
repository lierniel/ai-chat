import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AuthPage } from './pages/AuthPage';
import { ChatListPage } from './pages/ChatListPage';
import { ChatPage } from './pages/ChatPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProtectedRoute } from './routing/ProtectedRoute';

import './App.css';

export const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="auth" element={<AuthPage />} />
                <Route
                    index
                    element={
                        <ProtectedRoute>
                            <ChatListPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="chat/:botId"
                    element={
                        <ProtectedRoute>
                            <ChatPage />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};
