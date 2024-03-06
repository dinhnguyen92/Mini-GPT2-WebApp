using System.Diagnostics.CodeAnalysis;

namespace ApplicationLogic.Core
{
    public class ExecutionResult<TResultValue>
    {
        public TResultValue? Value { get; set; }
        public string? ErrorMessage { get; set; }

        [MemberNotNullWhen(true, nameof(Value))]
        [MemberNotNullWhen(false, nameof(ErrorMessage))]
        public bool IsCompleted { get; set; }

        public static ExecutionResult<TResultValue> Complete(TResultValue? value) => new() { Value = value, IsCompleted = true };
        public static ExecutionResult<TResultValue> Error(string error) => new() { ErrorMessage = error, IsCompleted = false };
    }
}
