import React, { useState } from 'react'
import { Logo } from '../components/Logo'
import './Dashboard.css'

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('teachers')

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-left">
          <Logo />
          <span className="header-title">ACADLY</span>
        </div>
        <div className="user-info">
          <span>Welcome, User</span>
          <button className="logout-btn">Logout</button>
        </div>
      </header>

      <div className="dashboard-content">
        <nav className="dashboard-nav">
          <button
            className={`nav-btn ${activeTab === 'teachers' ? 'active' : ''}`}
            onClick={() => setActiveTab('teachers')}
          >
            👨‍🏫 Teachers
          </button>
          <button
            className={`nav-btn ${activeTab === 'clubs' ? 'active' : ''}`}
            onClick={() => setActiveTab('clubs')}
          >
            🎭 Clubs
          </button>
        </nav>

        <main className="dashboard-main">
          {activeTab === 'teachers' && (
            <section className="tab-content">
              <h2>Teachers Management</h2>
              <div className="table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Email</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>001</td>
                      <td>Dr. John Smith</td>
                      <td>Computer Science</td>
                      <td>john.smith@university.edu</td>
                      <td>
                        <button className="action-btn edit">Edit</button>
                        <button className="action-btn delete">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>002</td>
                      <td>Prof. Sarah Johnson</td>
                      <td>Mathematics</td>
                      <td>sarah.johnson@university.edu</td>
                      <td>
                        <button className="action-btn edit">Edit</button>
                        <button className="action-btn delete">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>003</td>
                      <td>Dr. Michael Brown</td>
                      <td>Physics</td>
                      <td>michael.brown@university.edu</td>
                      <td>
                        <button className="action-btn edit">Edit</button>
                        <button className="action-btn delete">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className="add-btn">+ Add New Teacher</button>
            </section>
          )}

          {activeTab === 'clubs' && (
            <section className="tab-content">
              <h2>Clubs Management</h2>
              <div className="clubs-grid">
                <div className="club-card">
                  <h3>Chess Club</h3>
                  <p className="club-info">Members: 45</p>
                  <p className="club-info">President: Ahmed Hassan</p>
                  <p className="club-desc">A community for chess enthusiasts to meet, learn, and compete.</p>
                  <div className="card-actions">
                    <button className="action-btn edit">Edit</button>
                    <button className="action-btn delete">Delete</button>
                  </div>
                </div>

                <div className="club-card">
                  <h3>Debate Club</h3>
                  <p className="club-info">Members: 32</p>
                  <p className="club-info">President: Fatima Al-Zahra</p>
                  <p className="club-desc">Develop public speaking and critical thinking skills through debate.</p>
                  <div className="card-actions">
                    <button className="action-btn edit">Edit</button>
                    <button className="action-btn delete">Delete</button>
                  </div>
                </div>

                <div className="club-card">
                  <h3>Photography Club</h3>
                  <p className="club-info">Members: 28</p>
                  <p className="club-info">President: Maya Rodriguez</p>
                  <p className="club-desc">Explore photography techniques and share creative works.</p>
                  <div className="card-actions">
                    <button className="action-btn edit">Edit</button>
                    <button className="action-btn delete">Delete</button>
                  </div>
                </div>

                <div className="club-card">
                  <h3>Robotics Club</h3>
                  <p className="club-info">Members: 56</p>
                  <p className="club-info">President: Karim Ahmed</p>
                  <p className="club-desc">Build and program robots, participate in competitions.</p>
                  <div className="card-actions">
                    <button className="action-btn edit">Edit</button>
                    <button className="action-btn delete">Delete</button>
                  </div>
                </div>
              </div>
              <button className="add-btn">+ Add New Club</button>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}
