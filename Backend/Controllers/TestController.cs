using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace Backend.Controllers;

public class TestController : Controller
{
    public string Index()
    {
        return "You hit the default endpoint bro";
    }

    public string SecondEndpoint()
    {
        return "You hit the second endpoint Max, maybe you're not completely stupid.";
    }

    public string FirstText()
    {
        return "It's a crazy world out there man; sometimes it just feels like...... ALL NEWS IS SATIRE";
    }
}