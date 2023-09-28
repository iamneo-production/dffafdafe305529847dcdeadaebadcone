import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback.component';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
  });

  it('should create the feedback-component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize guestName, rating, and comment with default values', () => {
    expect(component.guestName).toEqual('');
    expect(component.rating).toEqual(5);
    expect(component.comment).toEqual('');
  });

  it('should add feedback to the feedbackList and clear the form after submission', () => {
    const feedbackData = {
      guestName: 'John Doe',
      rating: 4,
      comment: 'Great experience!',
    };

    component.guestName = feedbackData.guestName;
    component.rating = feedbackData.rating;
    component.comment = feedbackData.comment;

    component.submitFeedback();

    expect(component.feedbackList.length).toEqual(1);
    expect(component.feedbackList[0]).toEqual(feedbackData);
    expect(component.guestName).toEqual('');
    expect(component.rating).toEqual(1); // After submission, the rating should reset to 1
    expect(component.comment).toEqual('');
  });

  // it('should add feedback with default rating if rating is not provided', () => {
  //   const feedbackData = {
  //     guestName: 'Alice Smith',
  //     comment: 'Excellent service!',
  //   };

  //   component.guestName = feedbackData.guestName;
  //   component.comment = feedbackData.comment;

  //   component.submitFeedback();

  //   expect(component.feedbackList.length).toEqual(1);
  //   expect(component.feedbackList[0]).toEqual({
  //     guestName: feedbackData.guestName,
  //     rating: 1, // Default rating should be 1 if not provided
  //     comment: feedbackData.comment,
  //   });
  // });

  // it('should not add feedback with an empty guest name', () => {
  //   component.comment = 'Good service';
  //   component.submitFeedback();

  //   expect(component.feedbackList.length).toEqual(0); // No feedback should be added
  // });

  // it('should not add feedback with a negative rating', () => {
  //   component.guestName = 'Eva Green';
  //   component.rating = -2;
  //   component.comment = 'Poor experience';
  //   component.submitFeedback();

  //   expect(component.feedbackList.length).toEqual(0); // No feedback should be added
  // });

  // it('should not add feedback with a rating greater than 5', () => {
  //   component.guestName = 'Michael Brown';
  //   component.rating = 6;
  //   component.comment = 'Outstanding!';
  //   component.submitFeedback();

  //   expect(component.feedbackList.length).toEqual(0); // No feedback should be added
  // });
});
