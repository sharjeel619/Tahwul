import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sent02Icon } from "@hugeicons/core-free-icons";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Comment } from "@/lib/types/types";

const CommentCard = ({ comment }: { comment: Comment }) => {
  return (
    <Card>
      <CardContent>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6 border border-slate-200">
              <AvatarImage src={comment.avatar} alt={comment.author} />
              <AvatarFallback>SI</AvatarFallback>
            </Avatar>
            <h3 className="font-semibold text-sm">{comment.author}</h3>
          </div>
          <p className="text-secondary text-sm">
            {comment.date}
          </p>
        </div>
        <p className="mt-3 text-sm">{comment.content}</p>
      </CardContent>
    </Card>
  )
}

const Comments = ({ comments }: { comments: Comment[] }) => {
  return (
    <Card className="gap-3">
      <CardHeader>
        <CardTitle className="text-sm mt-3">Comments</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {comments.map((comment, idx) => (
          <CommentCard key={idx} comment={comment} />
        ))}
        <Textarea className="h-32" />
        <Button variant='primary' className="max-w-44">
          <HugeiconsIcon icon={Sent02Icon} />
          Post Comment
        </Button>
      </CardContent>
    </Card>
  )

}
export default Comments;
