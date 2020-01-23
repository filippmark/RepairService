using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace RepairService.Filters
{
    public class LogAttribute : ActionFilterAttribute
    {
        public LogAttribute( )
        {

        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            Debug.WriteLine(string.Format("Action Method {0} executing at {1}", context.HttpContext.Request.Path, DateTime.Now.ToString("HH:mm:ss")), "Web API Logs");
        }

        public override void OnActionExecuted(ActionExecutedContext context)
        {
            Debug.WriteLine(string.Format("Action Method {0} executed at {1}", context.HttpContext.Request.Path, DateTime.Now.ToString("HH:mm:ss")), "Web API Logs");
        }
    }

}
