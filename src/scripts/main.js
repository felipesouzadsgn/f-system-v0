import activities from '../data/activities.js';

document.addEventListener('DOMContentLoaded', () => {
  // Add hover effect to grid items
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateY(-4px)';
    });

    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateY(0)';
    });
  });

  // Animate progress squares on load
  const progressBar = document.querySelector('.progress-squares');
  const totalSquares = 15;
  const filledSquares = 9;

  // Create progress squares
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('progress-square');
    square.style.opacity = i < filledSquares ? '1' : '0.2';
    progressBar.appendChild(square);
  }

  // Add click effect to access buttons
  const accessButtons = document.querySelectorAll('.access-btn');
  accessButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const ripple = document.createElement('div');
      ripple.classList.add('ripple');
      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
  });

  // Add smooth scroll for shortcuts
  const shortcuts = document.querySelectorAll('.shortcut-item');
  shortcuts.forEach(shortcut => {
    shortcut.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = shortcut.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Generate activity calendar
  const generateActivityCalendar = () => {
    const calendar = document.getElementById('activity-calendar');
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 364); // Last 365 days

    // Calculate activity levels based on mock data
    const getActivityLevel = (date) => {
      // Get the month data
      const monthData = activities.yearlyData.months.find(m => {
        const monthName = date.toLocaleDateString('pt-BR', { month: 'long' });
        return m.month.toLowerCase() === monthName.toLowerCase();
      });

      if (!monthData) return 0;

      // Check if the day is in activeDays
      const dayOfMonth = date.getDate();
      if (monthData.activeDays.includes(dayOfMonth)) {
        // Get actual activities for this date if they exist
        const dayActivities = activities.recentActivities.find(a =>
          new Date(a.date).toDateString() === date.toDateString()
        );

        if (dayActivities) {
          const count = dayActivities.activities.length;
          if (count >= 7) return 3;
          if (count >= 4) return 2;
          return 1;
        }

        // If no specific activities but it's an active day,
        // calculate based on monthly average
        const avgActivities = Math.ceil(monthData.totalActivities / monthData.activeDays.length);
        if (avgActivities >= 7) return 3;
        if (avgActivities >= 4) return 2;
        return 1;
      }

      return 0;
    };

    // Update tooltip content generation
    const getTooltipContent = (date, activities) => {
      const dateStr = date.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'short'
      });

      if (!activities) return `${dateStr}: Nenhuma atividade`;

      const count = activities.activities.length;
      let content = `${dateStr}: ${count} atividade${count > 1 ? 's' : ''}\n`;

      // Group activities by category
      const grouped = activities.activities.reduce((acc, act) => {
        if (!acc[act.category]) acc[act.category] = [];
        acc[act.category].push(act);
        return acc;
      }, {});

      // Add activities grouped by category
      Object.entries(grouped).forEach(([category, acts]) => {
        content += `\n${category}:\n`;
        acts.forEach(act => {
          content += `- ${act.title} (${act.time}, ${act.duration})\n`;
        });
      });

      return content;
    };

    for (let i = 0; i < 365; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);

      const day = document.createElement('div');
      day.className = 'calendar-day';

      const activityLevel = getActivityLevel(currentDate);
      day.classList.add(`level-${activityLevel}`);

      const dayActivities = activities.recentActivities.find(a =>
        new Date(a.date).toDateString() === currentDate.toDateString()
      );

      const tooltipContent = getTooltipContent(currentDate, dayActivities);
      day.setAttribute('title', tooltipContent);
      day.setAttribute('data-date', currentDate.toISOString().split('T')[0]);

      calendar.appendChild(day);
    }
  };

  generateActivityCalendar();

  // Add streak information
  const addStreakInfo = () => {
    const trackerSection = document.querySelector('.activity-tracker');
    const streakInfo = document.createElement('div');
    streakInfo.className = 'streak-info';
    streakInfo.innerHTML = `
      <div class="streak-item">
        <span class="streak-label">Sequência atual:</span>
        <span class="streak-value">${activities.streaks.current} dias</span>
      </div>
      <div class="streak-item">
        <span class="streak-label">Maior sequência:</span>
        <span class="streak-value">${activities.streaks.longest} dias</span>
      </div>
      <div class="streak-item">
        <span class="streak-label">Esta semana:</span>
        <span class="streak-value">${activities.streaks.thisWeek}/7 dias</span>
      </div>
    `;
    trackerSection.insertBefore(streakInfo, trackerSection.querySelector('.tracker-grid'));
  };

  addStreakInfo();

  // Add hover effect for calendar days
  const calendarDays = document.querySelectorAll('.calendar-day');
  calendarDays.forEach(day => {
    day.addEventListener('mouseenter', () => {
      day.style.transform = 'scale(1.2)';
    });

    day.addEventListener('mouseleave', () => {
      day.style.transform = 'scale(1)';
    });
  });
}); 